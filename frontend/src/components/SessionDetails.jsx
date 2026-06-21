import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function SessionDetails({ sessionId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (sessionId) {
      fetchEvents();
    }
  }, [sessionId]);

  const fetchEvents = async () => {
    const res = await axios.get(
      `${API}/sessions/${sessionId}`
    );

    setEvents(res.data);
  };

  return (
    <div className="card">
      <h2>User Journey</h2>

      {!sessionId ? (
        <p>Select a session</p>
      ) : (
        events.map((event) => (
          <div
            key={event._id}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <strong>{event.eventType}</strong>

            <p>{event.pageUrl}</p>

            <small>
              {new Date(
                event.timestamp
              ).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
}