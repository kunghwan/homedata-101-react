import React from "react";
import "./Client_main_Head.css";
import {
  IoAddOutline,
  IoChatbubble,
  IoChevronDown,
  IoEllipsisVertical,
  IoHeadsetOutline,
} from "react-icons/io5";

const Client_main_Head = () => {
  return (
    <div className="h">
      {/* top */}
      <div className="top">
        <button className="tt">
          <p>#데이터시각화1기</p>
        </button>
        <div>
          <button className="b">
            <IoHeadsetOutline className="bb" />
            <IoChevronDown />
          </button>

          <button>
            <IoEllipsisVertical />
          </button>
        </div>
      </div>

      {/* bottom */}
      <div className="btm">
        <button className="msg">
          <IoChatbubble /> 메시지
        </button>
        <button className="m">
          더보기 <IoChevronDown />
        </button>
        <button className="p">
          <span>
            <IoAddOutline />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Client_main_Head;
