import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./schema";

const app = express();

const port = 8080;

app.get("/", (req, resp) => {
    resp.send("GraphQL is amazing");
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(port, () =>
    console.log(`Running server on localhost:${port}/graphql`)
);
