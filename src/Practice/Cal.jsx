import React from "react";
import "./Cal.css";

const Cal = () => {
  return (
    <div className="cal">
      <div className="AAA">
        <h4>캘린더</h4>
        <div className="left">
          <h1>12.16</h1>
          <p>월</p>
        </div>
      </div>

      <div className="right">
        <p>일</p>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
        {Array.from({ length: 31 }).map((_, i) => (
          <p key={i}>{i + 1}</p>
        ))}
      </div>
    </div>
  );
};

export default Cal;
