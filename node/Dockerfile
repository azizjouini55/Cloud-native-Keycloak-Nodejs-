FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g nodemon
EXPOSE 3000
CMD ["nodemon", "server.js"]