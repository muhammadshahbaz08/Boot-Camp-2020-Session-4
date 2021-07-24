import React, { useState } from "react";
import { Message } from "./message";
import "./App.css";

export const App = () => {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? "dayTime" : "nightTime"}`}>
      <h1>Good {isMorning ? "Morning" : "Night"}</h1>
      <Message counter={count} />
      <button className="countUpdater" onClick={() => setCount(++count)}>
        Update Count
      </button>
      <button className="dayUpdater" onClick={() => setMorning(!isMorning)}>
        Update Day
      </button>
    </div>
  );
};
