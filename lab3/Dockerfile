FROM node:14.9

WORKDIR /usr/sec/app

COPY packagr*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]