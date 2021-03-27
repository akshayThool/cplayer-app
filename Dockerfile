FROM node:15.12.0-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app
CMD ["npm","start"]