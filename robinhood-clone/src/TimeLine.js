import React from "react";

import "./TimeLine.css";

function TimeLine() {
  return (
    <div className="timeLine__container">
      <div className="timeLine__buttons__container">
        <div className="timeLine__button">Live</div>
        <div className="timeLine__button">ID</div>
        <div className="timeLine__button active">1W</div>
        <div className="timeLine__button">3M</div>
        <div className="timeLine__button">1Y</div>
        <div className="timeLine__button">ALL</div>
      </div>
    </div>
  );
}

export default TimeLine;
