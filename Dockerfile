FROM node:18-alpine as base

ENV CI=true

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["ember", "serve"]
