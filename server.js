import "dotenv/config";   // loads .env automatically
import express from "express";
import auditRoutes from "./src/routes/audit.routes.js"; // Import audit routes
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use("/", auditRoutes);

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
