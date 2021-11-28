FROM node:17-alpine

RUN apk add --update --no-cache \
    curl \ 
    git \ 
    vim 

WORKDIR /usr/app

COPY package.json .

RUN npm install -g nodemon@2.0.15

# @see https://github.com/babel/babel/issues/6810
# From 7 version, babel-node is a standalone package.
RUN npm install -g @babel/node@^7.16.0 \
    @babel/core@^7.16.0 \
    @babel/preset-env@^7.16.4 \
    @babel/preset-react@^7.16.0
