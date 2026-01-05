FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json .
COPY index.html .
COPY images ./images
COPY server.js .

RUN npm i 

EXPOSE 3000

CMD [ "node" ,"server.js" ]

