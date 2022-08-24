FROM node:18

WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]