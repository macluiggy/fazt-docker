FROM node:18

# donde va a ir toda la info de la app
RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]