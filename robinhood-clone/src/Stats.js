import React from "react";

import "./Stats.css";

function Stats() {
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* current stocks */}</div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* Stocks we can buy */}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
