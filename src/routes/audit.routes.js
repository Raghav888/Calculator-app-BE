import express from "express";
import { logEvent, getAuditHistory } from "../services/audit.service.js";

const router = express.Router();

router.post("/audit", async (req, res) => {
    try {
        const eventData = req.body;
        await logEvent(eventData);
        res.status(200).json({ message: "Event logged" });
    } catch (err) {
        res.status(500).json({ error: "Failed to log event" });
    }
});

router.get("/audit/history", async (req, res) => {
    try {
        const logs = await getAuditHistory();
        res.json({ events: logs });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch logs" });
    }
});

export default router;
