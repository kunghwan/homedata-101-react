import React from "react";
import "./WorkSpace.css";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

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
          <div>
            <img
              src="https://a.slack-edge.com/80588/img/avatars-teams/ava_0019-88.png"
              alt=""
            />
          </div>
          <div className="data">
            <h4>데이터시각화1기</h4>
            <div className="mem">
              <span>icons</span>
              <p>11명의 맴버</p>
            </div>
          </div>
        </div>
        <button className="ud">SLACK실행</button>
        <button className="ue">
          더 보기
          <IoIosArrowDown />
        </button>
      </div>

      <div className="box_1">
        <div>
          <h4>다른 팀과 Slack을 사용하고 싶으세요?</h4>
          <button>새 워크스페이스 개설</button>
        </div>
        <div>
          <img
            src="https://a.slack-edge.com/613463e/marketing/img/homepage/bold-existing-users/create-new-workspace-module/woman-with-laptop-color-background.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
