FROM node:18
WORKDIR /app/src
COPY . . 
RUN npm install
CMD  ["npm", "start"]