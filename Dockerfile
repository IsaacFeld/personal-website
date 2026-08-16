FROM node:latest

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build   

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", "dist/server/entry.mjs"]
