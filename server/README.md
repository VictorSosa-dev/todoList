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
* [jsonwebtoken](https://jwt.io/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [MySQL](https://www.mysql.com/)
* [Heroku](https://dashboard.heroku.com/)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
* [Docker](https://www.docker.com/)
* [DBeaver](https://dbeaver.io/)

<a name="installation"></a>
## 2. Installation and run instructions
 
### Requirements


Have the MySQL or if you prefer to use a docker container.

Follow the tutorial if you use docker. [Tutorial](https://platzi.com/tutoriales/1432-docker/3268-como-crear-un-contenedor-con-docker-mysql-y-persistir-la-informacion/)

Use docker
```
$ docker run -d -p 33061:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=2940

```

Connect to the MySQL service and create a database

Variables for connection

```
USER=root
PASSWORD=2940
DATABASE=todo
HOST=127.0.0.1
PORT=33061
DIALECT=mysql
```

### Install project

Create a new folder and clone the repository.
Opend the terminal and type:
```bash
	$ git clone https://github.com/antoniomd-fi/toDoList.git
```
In the terminal type:
```bash
   $ cd toDoList
```

Install node modules and run the application.
```bash
   $ npm install
```

Create tables

In the project folder open terminal and run the following commands

```
./node_modules/.bin/sequelize  db:migrate

```

<a name="usage"></a>
# Usage
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

```
{
	"email":"victor@gmail.com",
	"password":"pass"
}
```

Notas

Post
localhost:3000/todo

```
{
	"title": "PRUEBA 2",
  "description": "test 2",
	"userId":"4"
}
```