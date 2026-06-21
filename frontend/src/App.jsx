import { useState } from "react";
import SessionsView from "./Components/SessionView";
import SessionDetails from "./Components/SessionDetails";
import HeatmapView from "./Components/HeatmapView";
import "./App.css";

function App() {
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div className="container">
      <h1>User Analytics Dashboard</h1>

      <div className="grid">
        <SessionsView onSelectSession={setSelectedSession} />

        <SessionDetails sessionId={selectedSession} />
      </div>

      <HeatmapView />
    </div>
  );
}

export default App;