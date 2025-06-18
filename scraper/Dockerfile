FROM node:22

WORKDIR /app


COPY package*.json ./
COPY scraper ./scraper
COPY common ./common

RUN npm install

WORKDIR /app/scraper

CMD ["npm", "run", "scrape"]
