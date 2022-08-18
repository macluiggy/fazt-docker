// docker run postgres  ---- la descarga y la ejecuta
// docker pull ---- descarga la imagen pero no la ejecuta
// docker images ---- muestra las imagenes que estan en el sistema
// docker ps: muestra los contenedores que se estan ejecutando
// docker logs container_name ---- muestra los logs del contenedor, tambien se puede usar el ID del contenedor
// docker logs -f container_name ---- hace lo mismo que el anterior pero seguira ejecutando hasta que se cierre el contenedor
// docker exec ---- ejecuta un comando en el contenedor, a diferencia de run que ejecuta un contenedor nuevo a partir de una imagen
// docker exec -it container_id ---- ejecuta una session interactiva en el contenedor
// docker stop container_id ---- para detener el contenedor
// docker run -d container_id ---- para ejecutar un contenedor en background
// docker run -p 3000:80 nginx ---- esto quiere decir que internamente el contenedor escucha en el puerto 80 y lo redirige a 3000 localmente
// docker ps -a ---- muestra todos los contenedores que han sido ejecutados
// docker ps -aq ---- muestra todos los contenedores
// docker rm container_id ---- para eliminar un contenedor
// docker rm $(docker ps -aq) ---- para eliminar todos los contenedores
// docker rm $(docker ps -aq) -f ---- fuerza la eliminacion de los contenedores incluso si se estan ejecutando
// docker stop $(docker ps -aq) ---- para detener todos los contenedores
// docker run -p 80:80 -p 3000:80 ... -d nginx ---- de esta manera podemos ejecutar el mismo contenedor en varios puertos
// docker run -d -p 3306:3306 --name mydatabase mysql ---- para ejecutar un contenedor con un nombre y un puerto y un alias
// docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw --name mydatabase mysql ---- para ejecutar un contenedor con un nombre y un puerto y un alias y una variable de entorno}
// docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Status}}" ---- muestra todos los contenedores en una tabla de una forma mas bonita
// docker rmi mysql ---- para eliminar una imagen

// docker build -t username/image-name . ---- para crear una imagen y subirla en docker hub

// docker create mongo ---- para crear un contenedor con una imagen, forma corta de docker container create --name my-mongo -i mongo

// docker network create mired ---- para crear una red
// docker network ls ---- para listar las redes
// docker network rm mired ---- para eliminar una red
// si se quiere comunicar un contenedor con otro se debe crear una red, y se deben usar los alias de los contenedores para comunicarse

// docker build -t miapp . ---- para crear una imagen a partir de un dockerfile

// docker create -p27017:27017 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=luiggy -e MONGO_INITDB_ROOT_PASSWORD=password mongo ---- para crear un contenedor con una red
// docker create -p3000:3000 --name chanchito --network mired miapp:1.0 ---- para crear un contenedor con una red

// docker compose ---- para crear un archivo de configuracion de docker compose
// docker compose up ---- para ejecutar el archivo de configuracion de docker compose
// docker compose up -d ---- para ejecutar el archivo de configuracion de docker compose en background
// docker compose up --build -d ---- para reconstruir el archivo de configuracion de docker compose en background, osea revisa si hay cambios en el dockerfile y los aplica, si no los hay el proceso es mas rapido
// docker compose down ---- para detener el archivo de configuracion de docker compose
// docker compose -f docker-compose-dev.yml up ---- para ejecutar un archivo de configuracion de docker compose en especifico