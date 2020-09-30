FROM node:10-slim as fron-end
RUN mkdir -p /app
WORKDIR /app
# install and app dependencies
COPY package.json /app
RUN npm install
# add app
COPY . /app
# start app
RUN npm run build --prod
