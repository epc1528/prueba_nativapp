FROM node:16
WORKDIR /app
COPY dist ./dist
COPY *.json ./
RUN npm install
COPY swagger.yml ./
EXPOSE 3000
CMD [ "npm", "run", "start" ]