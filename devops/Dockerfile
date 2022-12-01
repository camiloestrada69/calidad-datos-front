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
COPY ./package.json package.json
RUN npm install

# add app
COPY ./ .
# generate build
ARG ANGULAR_ENV=qas
#RUN echo $ANGULAR_ENV
RUN ng build  --configuration $ANGULAR_ENV
#RUN npm run build  -- --output-path=./dist/out --configuration $ANGULAR_ENV


############
### prod ###
############

# base image
FROM nginx:1.17.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist /usr/share/nginx/html/

RUN rm -rf /etc/nginx/nginx.conf


COPY ./devops/nginx.conf /etc/nginx/nginx.conf

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
