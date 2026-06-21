const API_URL = "http://localhost:5000/api/events";

function getSessionId() {
  let sessionId = localStorage.getItem("session_id");

  if (!sessionId) {
    sessionId =
      "session_" +
      Date.now() +
      "_" +
      Math.random().toString(36).substring(2, 9);

    localStorage.setItem("session_id", sessionId);
  }

  return sessionId;
}

async function sendEvent(eventData) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
  } catch (error) {
    console.error("Tracking Error:", error);
  }
}

// Track Page View
window.addEventListener("load", () => {
  sendEvent({
    sessionId: getSessionId(),
    eventType: "page_view",
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  });
});

// Track Clicks
document.addEventListener("click", (e) => {
  sendEvent({
    sessionId: getSessionId(),
    eventType: "click",
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
    clickData: {
      x: e.clientX,
      y: e.clientY,
    },
  });
});