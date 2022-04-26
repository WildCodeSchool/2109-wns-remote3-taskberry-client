# Dockerfile

FROM node:lts-alpine

RUN mkdir /client
WORKDIR /client
COPY . . 
RUN yarn install
COPY tsconfig.json ./
COPY public public
COPY src src

CMD yarn start
