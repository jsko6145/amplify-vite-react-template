import React from 'react';
import './Speedometer.css';

const Speedometer = ({ value }: { value: number }) => {
  return (
    <div className="speedometer">
      <div className="speedometer-outer">
        <div className="speedometer-inner">
          <div className="speedometer-needle" style={{ transform: `rotate(${value * 1.8}deg)` }}></div>
        </div>
      </div>
      <div className="speedometer-value">{value} km/h</div>
    </div>
  );
};

export default Speedometer;