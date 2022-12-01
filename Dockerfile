FROM node:latest as node
WORKDIR /app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . .
RUN npm install --force
ARG ANGULAR_ENV=qas
RUN npm ci && npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ /usr/share/nginx/html



