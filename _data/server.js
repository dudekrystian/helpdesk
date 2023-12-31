const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running on: http://localhost:8000");
});
