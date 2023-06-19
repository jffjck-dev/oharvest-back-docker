# Projet O'Harvest

## Install

This project require the Docker engine. 

All commands need to be launch at the root of the project.

### Building image

In order to launch the app, you need to build the node image with the following command : 

```bash
docker-compose build
```

All dependencies are installed inside it.

### .env file

You need to configure the .env file.

Duplicate the file `.env.example` with a new name `.env`. Give all variables the correct values. 

All are mandatory except ENVIRONMENT. If it is empty, the application will launch in prod environment. The only value accepted is `dev`.

### Launch the app

When the image build and the .env file configured, you can launch the application with the following command :

```bash
docker-compose up -d 
```

The database will start before the node application.

## Sqitch

The project use sqitch for versioning the database. Assure you have the following scripts :

- sqitch.sh
- docker_sqitch_script.sh

The first one doesn't need to be modified. 

The second one add more interaction and require the `sqitch.sh` script. It will require some information depend on your configuration. 

For the development environment, it is recommended to copy the second script, uncomment the following variables (line 43, 45 and 47) and assign them a value. Don't forget to add this script inside the `.gitignore`.

```shell
# Design the user of the sql server who own the database of the project
#db_user=
# Represent the database of the project
#database=
# The password of the sql user
#db_password=
```

The engine variable design which RDBMS is used and `port` define the port where your docker database listen on the host. 
```shell
#Allow you to configure which database engine and port you want to use for your project.
#Uncomment the one needed
engine=pg
port=5432
```

For setting up the database, run the command (replace `dev_docker_sqitch_script.sh` by the dev script if necessary) : 

```bash
bash docker_sqitch_script.sh -i && bash docker_sqitch_script.sh -d && bash migrations/seed.sh
```

When all command finish to execute, the application is ready.

