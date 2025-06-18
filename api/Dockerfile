FROM node:22

WORKDIR /app


COPY package*.json ./
COPY api ./api
COPY common ./common

RUN npm install

WORKDIR /app/api

CMD ["npm", "run", "start"]
