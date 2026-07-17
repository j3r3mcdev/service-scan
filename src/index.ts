import * as core from "./core/index.js";
import * as types from "./types/index.js";
import { HttpServer } from "./api/http.server.js";

export { core, types, HttpServer };

const server = new HttpServer(3000);
server.start();

console.log("Service-scan started on port 3000");
