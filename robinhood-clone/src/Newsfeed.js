import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";

import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";

import "./Newsfeed.css";

function Newsfeed() {
  const popularTopics = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healtcare Supplies",
    "Index ETFs",
    "China",
    "Pharma",
  ];

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>114,656</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__container">
            <p>Market's Closed</p>
            <h1>Happy Thanksgiving</h1>
          </div>
        </div>
        <div className="newsfeed__popularLists__section">
          <div className="newsfeed__popularLists__intro">
            <h1>Popular Lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed__popularLists__badges">
            {/* {popularTopics.map((topic) => {
              <Chip className="topic__badge" variant="outlined" label={topic} avatar={<Avatar src={`https://avatars.dicebear.com/api/`}}
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
