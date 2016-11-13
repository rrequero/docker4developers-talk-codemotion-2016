FROM node:7.1.0-alpine
MAINTAINER rrequero@gmail.com

ENV NAME poc-map
ENV USER poc-map

RUN apk update && apk upgrade && \
    apk add --no-cache --update bash git openssh python build-base
RUN addgroup $USER && adduser -s /bin/bash -D -G $USER $USER
USER $USER
WORKDIR /home/$USER

COPY package.json /home/$NAME/package.json
RUN cd /home/$NAME && npm install



COPY ./app /home/$NAME/app

# Tell Docker we are going to use this ports
EXPOSE 8000

CMD ["npm", "start"]