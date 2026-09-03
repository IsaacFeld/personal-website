import { parseArgs } from "node:util";
import * as fs from "node:fs";
import path from "node:path";

const { positionals } = parseArgs({
  args: Bun.argv.slice(2),
  allowPositionals: true,
});

const inputPath: string = positionals[0];
const outputPath: string = positionals[1];

const blacklist = ["Valka Record", "Munich Room Search", "Monogame", "master theorem", "Developing with Small Teams", "Complaints DS", "Links", "Purpose"]

enum Domain {
  E = 1,
  P,
  W,
}
type Metadata = {
  tags: string[];
  domain: Domain;
  finished: boolean;
  written: Date;
  related: string[];
  footnotes: string[];
};
type WikiArticle = {
  name: string;
  metadata: Metadata;
  summary: string;
  body: string;
};

function parseMarkdownList(markdownString: string, tags: boolean): string[] {
  let parsedList = [];
  let splitList = markdownString.split(tags ? "-" : "- [[");
  for (let i = 1; i < splitList.length; i++) {
    parsedList.push(
      splitList[i].replaceAll("[", "").replaceAll("]", "").replaceAll("\n", ""),
    );
  }
  if (parsedList.length > 0 && parsedList[0] == "") {
    parsedList = parsedList.slice(1);
  }

  return parsedList;
}

function extractMetaData(rawMarkdown: string): Metadata {
  let tagsIndex = rawMarkdown.indexOf("tags:");
  let domainIndex = rawMarkdown.indexOf("domain: ");
  let finishedIndex = rawMarkdown.indexOf("finished: ");
  let dateIndex = rawMarkdown.indexOf("**Date**: ");
  let timeIndex = rawMarkdown.indexOf("**Time**: ");
  let relatedIndex = rawMarkdown.indexOf("## Related Topics");

  let tagsString = rawMarkdown.substring(tagsIndex, domainIndex);
  

  let domainString = rawMarkdown.substring(domainIndex, finishedIndex);
  let finishedString = rawMarkdown.substring(finishedIndex, finishedIndex + 5);
  let dateString = rawMarkdown.substring(dateIndex + 10, dateIndex + 18);
  let timeString = rawMarkdown.substring(timeIndex + 10, timeIndex + 15);
  
  let relatedString = rawMarkdown.substring(relatedIndex)
  let footNotes: string[] = []
  if (relatedString.includes("^")) {
    // There are footnotes
    footNotes = relatedString.substring(relatedString.indexOf("[^")).split(/\[\^\d+\]:/).slice(1);
    relatedString = relatedString.substring(0, relatedString.indexOf("^")) // Strip footnotes from related string.
    
  }
  
  
  let domain: Domain;
  if (domainString.includes("E")) {
    domain = Domain.E;
  } else if (domainString.includes("P")) {
    domain = Domain.P;
  } else {
    domain = Domain.W;
  }

  let finished: boolean = finishedString.includes("true") ? true : false;
  let [day, month, year] = dateString.split(".");
  let written: Date = new Date(`20${year}-${month}-${day}T${timeString}:00`);

  let tags: string[] = parseMarkdownList(tagsString, true);
  let related: string[] = parseMarkdownList(relatedString, false);

  return {
    domain: domain,
    finished: finished,
    written: written,
    tags: tags,
    related: related,
    footnotes: footNotes
  };
}
function extractSummary(rawMarkdown: string): {
  data: string;
  endIndex: number;
} {
  let startIndex: number = rawMarkdown.indexOf(">") + 22;
  let endIndex: number = rawMarkdown.indexOf("\n\n---\n# ");
  let summaryData: string = rawMarkdown
    .substring(startIndex, endIndex)
    .replaceAll(">", "")
    .replaceAll("---", "");

  return { data: summaryData, endIndex: endIndex };
}

function extractBody(
  rawMarkdown: string,
  endOfSummaryIndex: number,
  relatedIndex: number,
): string {
  // From End of summary to beginning of related is the body.
  let bodyData = rawMarkdown.substring(endOfSummaryIndex, relatedIndex);
  bodyData.replaceAll("---", "");
  return bodyData;
}

function getWikiArticle(fileName: string, rawMarkdown: string): WikiArticle {
  /* Builds the wiki article object. */
  let summary = extractSummary(rawMarkdown);
  return {
    name: fileName,
    metadata: extractMetaData(rawMarkdown),
    summary: summary.data,
    body: extractBody(
      rawMarkdown,
      summary.endIndex,
      rawMarkdown.indexOf("## Related Topics"),
    ),
  };
}

function getFiles(): void {
  if (inputPath == null) {
    console.log("Failed to read input args.");
    process.exit(1);
  }
  fs.readdir(path.normalize(inputPath), extractArticles);
}

/*
 * Extracts the markdown articles from the defined INPUT directory.
 * Creates a WikiArticle for each file within the INPUT directory, and writes it to the OUTPUT directory
 * using writeArticle
 */
function extractArticles(err: NodeJS.ErrnoException | null, files: string[]) {
  if (err) {
    console.log("Failed to read given directory.");
    console.error(err);
    process.exit(1);
  }

  for (const fileName of files) {
    if (blacklist.includes(fileName.split(".")[0])) {
      continue;
    }
    fs.readFile(
      `${path.normalize(inputPath + "/" + fileName)}`,
      { encoding: "utf-8" },
      (err, data) => {
        if (err) {
          console.log(
            "Failed to read a file within the given (valid) directory.",
          );
          console.error(err);
          process.exit(1);
        }
        let article: WikiArticle = getWikiArticle(fileName, data);
        writeArticle(article);
      },
    );
  }
}

/* Writes the given article to our specified OUTPUT directory, with some transformations applied to it. */
function writeArticle(article: WikiArticle) {
  const data = convertArticleToData(article);
  fs.writeFile(
    `${path.normalize(outputPath + "/" + article.name)}`,
    data,
    () => {
      console.log(
        `Wrote ${article.name} to the path ${outputPath}${article.name}`,
      );
    },
  );
}

function convertArticleToData(article: WikiArticle): string {
  const tagsYaml = JSON.stringify(article.metadata.tags ?? []);
  const relatedYaml = JSON.stringify(article.metadata.related ?? []);
  
  return `---
name: ${JSON.stringify(article.name)}
domain: ${article.metadata.domain}
written: ${JSON.stringify(article.metadata.written)}
finished: ${article.metadata.finished}
tags: ${tagsYaml}
related: ${relatedYaml}
summary: ${JSON.stringify(article.summary)}
footnotes: ${(JSON.stringify(article.metadata.footnotes) ?? [])}
---

  ${convertBlockQuotes(convertFootnotes(convertLinks(article.body.replaceAll("---", "").replace(`# ${article.name.split(".")[0]}`, ""))))}
  `;
}

type LinkData = {
  linkStart: number,
  linkEnd: number,
  linkName: string,
  linkUrl: string,
  linkType: "Image" | "Anchor",
  linkHTML: string,
}

function convertBlockQuotes(str: string): string{
  str = str.replaceAll("[!important]", `<div class="blockQuoteImportantContainer"><svg class="blockQuoteImportantIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-alert-icon lucide-book-alert"><path d="M12 13h.01"/><path d="M12 6v3"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg></div>`);
  str = str.replaceAll("[!info]", `<div class="blockQuoteInfoContainer"><svg class="blockQuoteInfoIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>`)
  return str;
}

function convertFootnotes(str: string): string {
  if (!str.includes("[^")) {
    return str;
  }
  let index = 1;
  while (str.indexOf("[^") != -1) {
    
    str = str.replace(/\[\^\d+\]/, `<a class="wikiLink wikiFootnoteLink" href="#footnote-${index}"> ${index} </a>`);
    index++;
  }
  return str;
}

function convertLinks(str: string): string {
  if (!str.includes("[[")) {
    return str;
  }
  
  let linkData: LinkData[] = [];
  let searchString = str;
  let index = 0;
  while (searchString.indexOf("[[") != -1) {
    let currentLinkIndex = searchString.indexOf("[[");
    searchString = searchString.substring(currentLinkIndex + 2) // Go ahead of the "[["
    index += (currentLinkIndex + 2); // Get absolute index of current link.
    storeLink(str, index, linkData);
  }
  let bodyWithLinksParsed = "";
  let currentReconstructionIndex = 0;
  for (const data of linkData) {
    bodyWithLinksParsed += str.substring(currentReconstructionIndex, data.linkStart) + data.linkHTML
    currentReconstructionIndex = data.linkEnd
  }
  return bodyWithLinksParsed + str.substring(currentReconstructionIndex);
}

function storeLink(str: string, start: number, ld: LinkData[]) {
  let end = start + str.substring(start).indexOf("]]");
  let linkContent = str.substring(start, end);
  let linkUrl = linkContent;
  let linkName = linkContent;
  if (linkContent.includes(".")) {
    if (linkContent.includes("|")) {
      linkName = linkContent.split("|")[1]; 
      linkUrl = linkContent.split("|")[0];
    }
    // Copy Picture File to Public Directory
    fs.cp(path.normalize(`/Users/isaacfldmn/Documents/Obsidian/Misc/Assets/${linkUrl}`.trim()), path.normalize(`/Users/isaacfldmn/Desktop/Coding/Personal - Coding/personal-website/public/wikiImages/${linkUrl}`), (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.log("Failed to copy picture file!")
        console.error(err);
      }
      
    })
    // Create IMG Element
    linkName = linkContent;
    linkUrl = `../wikiImages/${linkName}`
    ld.push({
      linkStart: start-3,
      linkEnd: start + (str.substring(start).indexOf("]]") + 2),
      linkName,
      linkType: "Image",
      linkUrl,
      linkHTML: `<div class="wikiImageContainer"><img class="wikiImage" src="${linkUrl}" alt="${linkName}"/></div>`
    })
  
  }
  else {

    if (linkContent.includes("|")) {
      // Handle Alias
      linkName = linkContent.split("|")[1]; 
      linkUrl = linkContent.split("|")[0];
    }
    ld.push({
      linkStart: start-2,
      linkEnd: start + (str.substring(start).indexOf("]]") + 2),
      linkHTML: `<a class="wikiLink" href="http://localhost:4321/wiki/${kebabCase(linkUrl)}"> ${linkName} </a>`,
      linkType: "Anchor",
      linkName,
      linkUrl
    })
  }
  
}

function kebabCase(str: string): string {
  return str.trim().replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").toLowerCase();
  
}

function parseMarkdown(markdown: string): string {
  return ""
}


getFiles();

/*
TODOs
- [x] add metadata & summary & footnotes
- [x] Need to replace all [[]] with either links if they are links or actual <img> html elements if they are images.
- [x] Replace footnotes with # links to make them work
  - [x] Split footnotes into proper array, perhaps split into id & content array for easier client side rendering.
- [x] Replace related articles with working links.
- [x] make latex work/render
- [x] fix color issues due to css inline styles / theme
- [x] render blockquotes properly
- [x] Remove title & weird remove first h1 css rule

- [ ] Investigate bug after images causing text to not be put in a <p> element.
- [ ] Resize Latex & maybe text
- [ ] Add Searchbar
- [ ] Parse Summary & Footnotes with simple markdown - html parser
- [ ] Remove faulty wiki articles
- [ ] Outline on left or right as sidebar with # links to all headers



*/