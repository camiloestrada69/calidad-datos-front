FROM node:latest as node
WORKDIR /app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY .. .
RUN npm install
ARG ANGULAR_ENV=qas
RUN ng build  --configuration $ANGULAR_ENV
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ /usr/share/nginx/html

#############
### build ###
#############

# base image
FROM node:14-alpine as build

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ../package.json package.json
RUN npm install

# add app
#COPY devops .
# generate build
ARG ANGULAR_ENV=qas
#RUN echo $ANGULAR_ENV
RUN ng build  --configuration $ANGULAR_ENV
#RUN npm run build  -- --output-path=./dist/out --configuration $ANGULAR_ENV


