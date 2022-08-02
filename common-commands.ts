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