FROM node:14-alpine as build
WORKDIR /app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . .
RUN npm install
ARG ANGULAR_ENV=qas
RUN ng build  --configuration $ANGULAR_ENV
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ /usr/share/nginx/html



