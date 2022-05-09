import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const updateCount = (updateType: string) => {
    if (updateType === "up") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
      if (count <= 0) {
        setCount(0);
      }
    }
    console.log(count);
  };

  const clearCount = () => {
    setCount(0);
  };

  return (
    <div className="count-cont">
      <div className="arrow-cont">
        <div>
          <button
            className="button is-large is-success is-light"
            id="dwn-btn"
            onClick={() => updateCount("down")}
          >
            {"<"}
          </button>
        </div>
        <div className="numb-cont">
          <h2 id="stitch-count">{count}</h2>
        </div>
        <div>
          <button
            className="button is-large is-success is-light"
            id="up-btn"
            onClick={() => updateCount("up")}
          >
            {">"}
          </button>
        </div>
      </div>

      <div>
        <button className="button is-large" onClick={clearCount}>
          Clear
        </button>
      </div>
    </div>
  );
};
