FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 3008

EXPOSE 3008

CMD ["npm", "start"]
