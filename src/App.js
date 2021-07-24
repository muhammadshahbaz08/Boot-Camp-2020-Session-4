import React, { useState } from "react";
import { Message } from "./message";

export const App = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="box">
      <Message counter={count}/>
      <button onClick={() => setCount(++count)}>Update Count</button>
    </div>
  );
};
