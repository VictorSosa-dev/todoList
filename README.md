# toDoList
An app to create activities' lists usign Node JS

This project is part of phase 2 of the Santander and BEDU scholarship.


## Table of Contents
1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Authors](#authors)


<a name="technologies"></a>
## 1. Technologies

* [Sequelize](https://sequelize.org/)
* [jsonwebtoken](https://nodejs.org/api/crypto.html)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [MySQL](https://www.sqlite.org/index.html)
* [Render](https://render.com/)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
* [Docker](https://www.docker.com/)
* [DBeaver](https://dbeaver.io/)


## 2. Isntall

Requisitos

Tener docker

ejecutat los siguientes comandos en la terminal o seguir el tutorial

https://platzi.com/tutoriales/1432-docker/3268-como-crear-un-contenedor-con-docker-mysql-y-persistir-la-informacion/

Crear volumen

docker volume create mysql-sb-data

docker run -d -p 33061:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=2940 --mount src=mysql-db-data,dst=/var/lib/mysql mysql


## Conectarnos a DB desde terminla

docker exec -it mysql-db mysql -p

## Conectarse con un Gestor de base de datos

Datos para la conexion

        "username": "root",
        "password": "2940",
        "database": "todo",
        "host": "localhost",
        "port": "33061",
        "dialect": "mysql"

Despues Descargar el proyecto y hacer las migraciones


Hacer la migración

./node_modules/.bin/sequelize  db:migrate

Los siguentes comandos son para hacer los archivos para la migracion y para desahacer las tablas en caso de un error

Crear archivo de migracion

./node_modules/.bin/sequelize migration:create --name CreateTabltodoTasks

Deshacer las tablas

./node_modules/.bin/sequelize  db:migrate:undo


Pruebas en insomia

Datos

Rutas

Post
localhost:3000/auth/signUp

{
	"username":"victor",
	"name":"victor",
	"lastname":"Sosa",
	"email":"victor@gmail.com",
	"password":"tito"
}

Post
localhost:3000/auth/logIn

{
	"email":"victor@gmail.com",
	"password":"tito"
}

Notas

Post
localhost:3000/todo
{
	"title": "PRUEBA 2",
  "description": "test 2",
	"userId":"4"
}
