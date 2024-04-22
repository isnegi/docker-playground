FROM node:lts-alpine3.18

WORKDIR /playground

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json


#RUN apk update && apk add nodejs && apk add npm

#RUN npm install

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


