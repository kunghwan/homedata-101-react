import React from "react";
import "./Client_Aside.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoFilter, IoHeadsetOutline, IoPencilOutline } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

const Client_Aside = () => {
  return (
    <aside id="client">
      <div className="top">
        <div className="wrap">
          <button className="dataone">
            <p>데이터시각화1기</p>
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </button>
          <ul>
            <li>
              <button>
                <IoFilter />
              </button>
            </li>
            <li>
              <button>
                <IoPencilOutline />
              </button>
            </li>
          </ul>
        </div>

        <button className="trial">
          <CgSandClock />
          <div>
            <span>평가판이 10일 남았습니다.</span>
            <IoIosArrowForward />
          </div>
        </button>
      </div>

      <div className="btm">
        <ul className="q">
          <li>
            <button>
              <IoHeadsetOutline />
              허들
            </button>
          </li>
        </ul>

        <ul className="a">
          <li>
            <button className="tt">
              <MdOutlineKeyboardArrowDown />
              채널
              <MdOutlineKeyboardArrowDown className="h" />
            </button>
          </li>
          <li>
            <button># 데이터시각화-1기</button>
          </li>
          <li>
            <button># 새-워크스페이스</button>
          </li>
          <li>
            <button>
              <IoIosArrowForward />
              채널추가
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button>
              <MdOutlineKeyboardArrowDown />
              다이렉트 메세지
            </button>
          </li>
          <li>
            <button className="p">
              <div>
                <em>p</em>
                <span />
              </div>
              유경환
            </button>
          </li>
          <li>
            <button>
              <MdOutlineKeyboardArrowDown />
              사용자 초대
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button>
              <MdOutlineKeyboardArrowDown />앱
            </button>
          </li>
          <li>
            <button>
              <MdOutlineKeyboardArrowDown />
              앱추가
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Client_Aside;
