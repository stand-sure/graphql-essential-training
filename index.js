import express from "express";
const app = express();

const port = 8080;

app.get("/", (req, resp) => {
    resp.send("GraphQL is amazing");
});

app.listen(port, () => console.log(`Running server on localhost:${port}/graphql`))