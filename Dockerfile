FROM node:lts
COPY . /home/app
WORKDIR /home/app
RUN npm install
