FROM node:latest

WORKDIR /app

RUN npm run build
COPY dist .

CMD ["node", "dist/server/entry.mjs"]
