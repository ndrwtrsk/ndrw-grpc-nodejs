FROM grpc/node:1.0-onbuild
MAINTAINER Andrew Torski <andrew.torski@gmail.com>

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 6565
CMD ["npm", "start"]