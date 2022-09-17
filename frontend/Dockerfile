FROM node:16.17.0-alpine

WORKDIR /app

COPY package-lock.json .

COPY package.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]