const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Event.aggregate([
      {
        $group: {
          _id: "$sessionId",
          totalEvents: { $sum: 1 },
        },
      },
      {
        $sort: {
          totalEvents: -1,
        },
      },
    ]);

    res.json(sessions);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSessionEvents = async (req, res) => {
  try {
    const events = await Event.find({
      sessionId: req.params.sessionId,
    }).sort({ timestamp: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getHeatmapData = async (req, res) => {
  try {
    const clicks = await Event.find({
      pageUrl: req.query.pageUrl,
      eventType: "click",
    });

    res.json(clicks);
  } catch (error) {
    res.status(500).json(error);
  }
};