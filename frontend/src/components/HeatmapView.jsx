import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function HeatmapView() {
  const [url, setUrl] = useState("");
  const [clicks, setClicks] = useState([]);

  const loadHeatmap = async () => {
    const res = await axios.get(
      `${API}/heatmap?pageUrl=${encodeURIComponent(
        url
      )}`
    );

    setClicks(res.data);
  };

  return (
    <div className="card">
      <h2>Heatmap View</h2>

      <input
        type="text"
        placeholder="Enter Page URL"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
      />

      <button onClick={loadHeatmap}>
        Load Heatmap
      </button>

      <div className="heatmap">
        {clicks.map((click, index) => (
          <div
            key={index}
            className="dot"
            style={{
              left: click.clickData?.x || 0,
              top: click.clickData?.y || 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}