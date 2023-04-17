# Projet O'Harvest

## Install

### NPM

Install all mandatory packages, in a first time :

```shell
npm install
```

### Database

This projet work with a versioning tool for database named sqitch. The process of installation can be done by following the [official documentation](https://sqitch.org/download/).

A script, named `sqitch_script.sh`, is served as interface for sqitch. The database can be build with the following command :

```shell
npm run db:prod:build
```

It will prompt you differents questions. Fill with the corresponding answer.

- The first step will create a new user with his corresponding database
- The second step will ask you which version you wish to deploy. For all, answer 1.
- The last one will seed the database.

For the development environment, it is recommended to copy the script, uncomment the following variables (line 43, 45 and 47) and assign them a value. Don't forget to add this script inside the `.gitignore`.

```shell
# Design the user of the sql server who own the database of the project
#db_user=
# Represent the database of the project
#database=
# The password of the sql user
#db_password=
```

### .env file

You need to configure the .env file.

Duplicate the file `.env.example` with a new name `.env`. Give all variables the correct values.

## Starting the server

To start the server, execute :

```shell
npm run start
```
