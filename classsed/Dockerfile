FROM node:18

WORKDIR /app

COPY ./ ./

RUN npm i -g pnpm
RUN pnpm install

CMD [ "node", "index.js" ]