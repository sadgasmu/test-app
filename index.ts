import { ApolloServer } from "apollo-server-express";
import { readFileSync } from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from "./src/graphql/resolvers/index";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

async function startApolloServer(resolvers: any) {
    const app = express();
    const schemaString = readFileSync('./src/graphql/schema.graphql', 'utf8');

    const schema = makeExecutableSchema({
        typeDefs: schemaString,
        resolvers
    });

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        //tell Express to attach GraphQL functionality to the server
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;

    await server.start(); //start the GraphQL server.

    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`Server listening on port ${4000}`);
    });
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(resolvers).then(() => console.log('Server started!'));
