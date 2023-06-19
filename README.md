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

All are mandatory except ENVIRONMENT. Don't touch the DBHOST value. It must be equal to the service name where the database is launch by docker.

If it is empty, the application will launch in prod environment. The only value accepted is `dev`.

### Launch the app

When the image build and the .env file configured, you can launch the application with the following command :

```bash
docker-compose up -d 
```

The database will start before the node application.

## Sqitch

The project use sqitch for versioning the database. Assure you have the following scripts :

- sqitch
- docker_sqitch_script.sh

This second script will download the first script, if it is missing, and add interaction to use sqitch. It will require some information depend on your configuration. 

It is highly recommended to copy the second script in order to store sensible information.

For development environment, you can uncomment the following variables (line 43, 45 and 47) and assign them a value. Don't forget to add this script inside the `.gitignore`.

```shell
# Design the user of the sql server who own the database of the project
#db_user=
# Represent the database of the project
#database=
# The password of the sql user
#db_password=
```

The engine variable design which RDBMS is used and `docker_host_port` define the port where your docker database listen on the host. 
```shell
#Allow you to configure which database engine and port you want to use for your project.
#Uncomment the one needed
engine=pg
docker_host_port=5432
```

For setting up the database, run the command (replace `docker_sqitch_script.sh` by the dev script if necessary) : 

```bash
bash docker_sqitch_script.sh -i && bash docker_sqitch_script.sh -d && bash migrations/seed.sh
```

When all command finish to execute, the application is ready.

## Reset the application

If you need to reset the database, you need to delete all the container and their associated volumes : 

```bash
# Delete the container need for the application then delete their volume.
docker-compose rm && docker volume rm o-harvest-back_db_data && docker volume rm o-harvest-back_node_module
```