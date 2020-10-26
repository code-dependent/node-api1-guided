// TODO: import express
const express = require("express");

// TODO: Create a Server.
const server = express();

// TODO: Middleware
server.use(express.json());
// database array
let hubs = [
  {
    id: 1,
    name: "building API with express",
    lessionID: 1,
    cohort: "webSOLO",
  },
  {
    id: 2,
    name: "server routing with express",
    lessionID: 2,
    cohort: "webSOLO",
  },
];
// TODO: A function to handle GET
server.get("/", (req, res) => {
  res.send("Hello World of Node");
});

server.get("/hubs", (req, res) => {
  res.status(200).json(hubs);
});
// A function to handle POST requests
server.post("/hubs", (req, res) => {
  const hub = req.body;
  hubs.push(hub);
  res.status(201).json(hubs);
});
// A function to handle DELETE requests
server.delete("/hubs/:id", (req, res) => {
  const id = req.params.id;
  hubs = hubs.filter((hub) => hub.id !== Number(id));
  res.status(200).json(hubs);
});
// A function to handle PUT requests
server.put("/hubs/:id", (req, res) => {
  const hub = req.body;
  const id = req.params.id;
  hubs = hubs.filter((hub) => hub.id !== Number(id));
  hubs.push(hub);
  res.status(200).json(hubs);
});

// TODO: Listen for incoming requests
const port = 8000;

server.listen(port, () => console.log(`== API Running on Port ${port} ==`));
