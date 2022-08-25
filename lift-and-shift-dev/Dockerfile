FROM node:18

WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build
RUN https://github.com/ufoscout/docker-compose-wait/releases/download/v2.0.0/wait /wait
RUN chmod +x /wait

EXPOSE 3000

CMD [ "pnpm", "start" ]