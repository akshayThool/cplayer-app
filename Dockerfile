FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm install &&\
    apk update &&\
    apk upgrade
COPY . /app
EXPOSE  8080
CMD npm start
