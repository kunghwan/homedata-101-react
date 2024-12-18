import React from "react";
import "./WorkSpace.css";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";

const WorkSpace = () => {
  return (
    <div className="ws">
      <div className="f">
        <HiOutlineHandRaised />
        <h1>또 만나게 되어 반가워요</h1>
      </div>
      <div className="box">
        <p className="email">ysw03031@gmail.com의 워크스페이스</p>
        <div className="box_b">
          <img
            src="https://a.slack-edge.com/80588/img/avatars-teams/ava_0019-88.png"
            alt=""
          />
          <div className="data">
            <h4>데이터시각화1기</h4>
            <div className="mem">
              <span>icons</span>
              <p>11명의 맴버</p>
            </div>
          </div>
        </div>
        <button>SLACK실행</button>
        <button>더보기</button>
      </div>
    </div>
  );
};

export default WorkSpace;
