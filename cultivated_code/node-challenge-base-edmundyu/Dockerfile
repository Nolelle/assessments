FROM node:16.0.0-alpine
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]
