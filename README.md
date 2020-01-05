# Sumber belajar
[https://github.com/brian-childress/node-autogenerate-swagger-documentation](https://github.com/brian-childress/node-autogenerate-swagger-documentation)

# Simple NodeJS API Server

In this example application, we use Swagger JSDoc and Swagger UI Express to automatically generate OpenAPI documentation. We create a simple NodeJS API server to demonstrate the power of autogenerated documentation.

## Tutorial Available

[YouTube: Autogenerating Swagger Documentation with Node & Express](https://www.youtube.com/watch?v=apouPYPh_as)

[![Autogenerating Swagger Documentation with Node & Express](assets/autogen-node-swagger-docs.png)](https://www.youtube.com/watch?v=apouPYPh_as "Autogenerating Swagger Documentation with Node & Express")

## Running the Server

With [NodeJS](https://nodejs.org/en/) installed, you can started the server by running,

```sh
node app.js
```

_**OR**_

```sh
npm run start
```

## Accessing the Docs

With your local server running, the generated docs are available here: [http://localhost:5000/docs](http://localhost:5000/docs)

## Development

This simple server can be easily extended. After cloning this [repository](https://github.com/brian-childress/node-autogenerate-swagger-documentation) you can start developing locally.

### Locally (without Docker)

1) Install [Nodemon](https://www.npmjs.com/package/nodemon), Nodemon will watch for file changes and restart the NodeJS process. This allows for faster development and testing.

```sh
npm install -g nodemon
```

2) With Nodemon installed, start the server using Nodemon

```sh
nodemon app.js
```

_**OR**_

```sh
npm run start:dev
```

### Using Docker

I prefer to use Docker for local development wherever possible. This allows me to have a consistent development environment.

#### Start Docker Container

With Docker installed, we can start a container using the latest NodeJS Docker image.

```sh
docker run -it --rm -p 5000:5000 -v $(pwd):/api -w="/api" node bash
```

Start the application in development mode using Nodemon inside your Docker Container

```sh
npm run start:dev
```

To stop your running NodeJS API server

```sh
ctrl + c
```

To quit your Docker Container development environment, in your terminal:

```sh
exit
```

This will cleanup any running containers, (note: the Docker image will still exist on your machine)