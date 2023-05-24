import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    // 반올림
  }

  return (
    <div className="chart-bar">
      <div className="chart-bat__inner">
        <div
          className="chart-bat__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bat__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
