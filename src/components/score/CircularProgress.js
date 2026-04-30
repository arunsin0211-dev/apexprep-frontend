import React, { useEffect, useState } from 'react';

const CircularProgress = ({ value, total }) => {
  // Calculate percentage
  const percentage = Math.min(Math.max((value / total) * 100, 0), 100);
  const size = 150, strokeWidth = 10, color = "#4ade80"
  
  // SVG Math
  const radius = (size - strokeWidth) / 2;
  const circumference = radius  * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  console

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background Circle (Gray track) */}
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="transparent"/>
        {/* Progress Circle (The "Bar") */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference} // Fallback to 430 if circumference is 0
          style={{
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease-in-out',
            strokeLinecap: 'round'
          }}
        />
      </svg>
      
      {/* Percentage Text in the middle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl italic font-semibold">
        {value} <hr /> {total}
      </div>
    </div>
  );
};

export default CircularProgress;