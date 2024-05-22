import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", (request, response) => {
  response.send("home page");
});

app.get("/about", (request, response) => {
  response.status(200).send("about page");
});

app.get("/about/:id", async (request, response) => {
  const params = request.params.id;

  const data = await fs.readFile("data/posts.json", "utf8");

  const posts = JSON.parse(data);

  const result = posts.filter((post) => post.userId == params);

  response.status(200).send(result);
});

app.get("/contact", (request, response) => {
  response.send("contact page");
});

app.get("/*", (request, response) => {
  response.status(404).send("404 not found page");
});

const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server running at port: ${PORT}`);
});
