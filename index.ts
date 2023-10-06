import http from "http";
import express from "express";
import resolvers from "./src/graphql/resolvers/index";
import { ApolloServer } from "apollo-server-express";
import { readFileSync } from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

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
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;

    await server.start();

    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`Server listening on port ${4000}`);
    });
}

startApolloServer(resolvers).then(() => console.log('Server started!'));
