import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function SessionView({ onSelectSession }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const res = await axios.get(`${API}/sessions`);
    setSessions(res.data);
  };

  return (
    <div className="card">
      <h2>Sessions</h2>

      {sessions.map((session) => (
        <div
          key={session._id}
          className="session-item"
          onClick={() => onSelectSession(session._id)}
          style={{
            cursor: "pointer",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <strong>{session._id}</strong>
          <p>Events: {session.totalEvents}</p>
        </div>
      ))}
    </div>
  );
}