import express from "express";
import bodyParser from "body-parser";
import auditRoutes from "./routes/audit.routes.js";

const app = express();
app.use(bodyParser.json());

app.use("/", auditRoutes);

export default app;
