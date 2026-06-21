const express = require("express");

const router = express.Router();

const {
  createEvent,
  getSessions,
  getSessionEvents,
  getHeatmapData,
} = require("../controllers/eventController");

router.post("/events", createEvent);

router.get("/sessions", getSessions);

router.get("/sessions/:sessionId", getSessionEvents);

router.get("/heatmap", getHeatmapData);

module.exports = router;