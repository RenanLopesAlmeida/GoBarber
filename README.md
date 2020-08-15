# :rocket: Go-Barber 

## What is it?
:sparkles: Go-Barber is an application to make haircuts appointments, where a client can appoint a haircut with a provider. <br>
:wrench: On Front End, the providers can see and manage the appointments <br>
:fire: On Mobile, the customers can make an appointment choosing a provider



## Backend
#### To run, you must have a postgres image on docker, check ormconfig.json file. Then, you can run on your terminal `yarn` to download the node_modules and to start the server, you just need to type on your terminal: `yarn dev:server`. It is using port:3333. <br>

#### After you create an user, you must log in, to do that, go to localhost:3333/sessions.

Some features on backend:

* Created with NodeJS and Typescript
* Migrations
* id created with uuid generator
* Application created with some Design Patterns, like Dependency Injection, Repository, Services
* JWT Authentication
* Middleware
* Postgres Database on  a Docker Container
* Use of typeORM 
* Creation of an appointment that relates a provider with a user
* Upload User Avatar Image
* Creation of Global Error Handling to customize the exceptions
