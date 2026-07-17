import { HttpServer } from "./api/http.server.js";

const server = new HttpServer(3000);
server.start();

console.log("Service-scan started on port 3000");
