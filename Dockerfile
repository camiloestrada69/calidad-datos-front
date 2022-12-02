FROM node:14-alpine as build
WORKDIR /app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . .
RUN npm install
ARG ANGULAR_ENV=prod
RUN npm run build --$ANGULAR_ENV
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/calidad-datos /usr/share/nginx/html



