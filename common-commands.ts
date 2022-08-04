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