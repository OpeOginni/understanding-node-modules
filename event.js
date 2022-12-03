const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super(); // We need this to get access to all the methods in the parent class
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Ope");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in the stock`);
});

myEmitter.emit("newSale", 9);

//////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Recived!");
  res.end("Request Recieved");
});

server.on("request", (req, res) => {
  console.log("Another Request 🔥");
});

server.on("close", () => {
  console.log("Server Closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for Requests...."); // Run on 127.0.0.1:8000
});
