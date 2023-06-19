FROM node:18-alpine

RUN apk add bash

USER node

WORKDIR /home/node/oharvest

ADD --chown=node:node ../../package.json ../../package-lock.json ./

RUN npm install

ENTRYPOINT ["npm", "run"]
CMD ["start"]