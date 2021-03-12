#
# Node.js w/ Bower & Grunt Dockerfile
#
# https://github.com/digitallyseamless/docker-nodejs-bower-grunt
#

# Pull base image.
FROM library/node:12
MAINTAINER Digitally Seamless <docker@digitallyseamless.com>

# Define working directory.
WORKDIR /
COPY . /

# Install Bower & Grunt
RUN npm install -g bower grunt-cli 

RUN npm install -g gulp
RUN npm install gulp

RUN npm install

RUN npm rebuild node-sass



# Define default command.
EXPOSE 3000
CMD ["gulp"]