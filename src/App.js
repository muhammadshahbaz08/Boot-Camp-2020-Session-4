import React, { useState } from "react";

export const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="box">
      <h2>Value of Counter Variable is : {count}</h2>
      <button onClick={()=>setCount(++count)}>Update Count</button>
    </div>
  );
};
