# Test App

Test App is a GraphQL server built using Node.js, Express, Apollo Server, and Knex.js. It provides a simple GraphQL API for managing houses. This README provides an overview of the project's structure, dependencies, and how to get started.

## Table of Contents

- [Project Description](#project-description)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Docker Compose Configuration](#docker-compose-configuration)
- [License](#license)

## Project Description

Test App is a GraphQL server that allows you to manage houses. It uses the following technologies:

- Node.js: A JavaScript runtime environment for building server-side applications.
- Express: A popular web application framework for Node.js.
- Apollo Server: A GraphQL server implementation for Node.js.
- Knex.js: A SQL query builder for Node.js that supports various database systems.
- TypeScript: A statically typed superset of JavaScript.

The application includes GraphQL schemas, resolvers, and database interactions to perform CRUD operations on houses.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js: [Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): It comes with Node.js.
- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sadgasmu/test-app.git

2. Navigate to the project directory:
    ```bash     
    cd test-app

3. Copy the .env.example file to .env and configure the environment variables as needed.
  
4. Build the Docker containers:
    ```bash
   docker-compose build
   
5. Start the Docker containers:
   ```bash
   docker-compose up
   
Your application should now be running. Access the GraphQL playground at http://localhost:4000/graphql.
   Project Structure
   The project structure is organized as follows:

    db/: Contains db logic that is used outside of app's runtime
    src/: Contains the source code of the application.
    src/graphql/: Includes GraphQL schemas and resolvers.
    src/repositories/: Houses database interactions.
    src/services/: Business logic and service layer.
    src/types/: Typescript types.
    index.ts: Main entry point of the application.
    docker-compose.yml: Docker Compose configuration for MySQL and the Node.js application.
    package.json: Node.js package configuration.
Available Scripts
    npm run dev: Starts the development server using nodemon and runs GraphQL Code Generator.
    Docker Compose Configuration
This project uses Docker Compose to set up two services:

mysql: MySQL database container.
app: Node.js application container.
The docker-compose.yml file defines the configuration for these services, including environment variables, port mappings, and volumes.


