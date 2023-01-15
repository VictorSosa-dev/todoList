#Todo List

1. Create DataBase with image docker

	Use docker
	```
	$ docker run -d --rm --name postgres -e POSTGRES_PASSWORD=2940 -p 5432:5432 postgres

	```

	Connect to the Postgres database with the following data. 

	host: localhost

	port: 5432
	
	dataBase: postgres

	name: postgres

	password: 2940

2. Install project locally
   
   Create a new folder and clone the repository.
Opend the terminal and type:
	```bash
		$ git clone https://github.com/VictorSosa-dev/todoList.git
	```
	Once inside the folder, enter the two client and server folders and run npm install
	```bash
   	$ cd toDoList/client
    $ cd toDoList/server
	```

	Install node modules and run the application.
	```bash
   	$ npm install
	```
