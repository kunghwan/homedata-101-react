import React from "react";
import "./Transfer.css";
import { IoIosArrowForward } from "react-icons/io";

const Transfer = () => {
  return (
    <div id="tras">
      <a href="">
        <p>Slack 내 Agentforce로 에이전트를 팀원으로 전환하세요.</p>
        <div>
          자세히 알아보기
          <IoIosArrowForward />
        </div>
      </a>
      <button className="closer">X</button>
    </div>
  );
};

export default Transfer;
