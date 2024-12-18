import React from "react";
import "./Footer.css";
import {
  IoIosGlobe,
  IoIosArrowForward,
  IoIosCloudDownload,
} from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import {
  FaArrowDown,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaRegCheckCircle,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok, FaSlack } from "react-icons/fa6";
const bt = [
  { icon: AiFillLinkedin },
  { icon: FaInstagram },
  { icon: FaFacebookSquare },
  { icon: FaXTwitter },
  { icon: FaYoutube },
  { icon: FaTiktok },
];
const bo = [
  "제품",
  "왜 SLACK이어야 할까요?",
  "기능",
  "솔루션",
  "리소스",
  "회사",
];
const bk = [
  "Slack 다운로드",
  "개인 정보 보호",
  "약관",
  "쿠키 기본 설정",
  "귀하의 개인정보 보호 선택",
];
const Footer = () => {
  return (
    <footer id="footer">
      <div className="local">
        <button>
          <IoIosGlobe />
          <span>지역 변경</span>
          <FaArrowDown />
        </button>
      </div>
      <div>
        {/* <button>
          <AiFillLinkedin />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaFacebookSquare />
        </button>
        <button>
          <FaXTwitter />
        </button>
        <button>
          <FaYoutube />
        </button>
        <button>
          <FaTiktok />
        </button> */}
        {bt.map((b, i) => (
          <button key={i}>{React.createElement(b.icon)}</button>
        ))}
      </div>

      <div>
        <ul>
          {bo.map((b, i) => {
            return (
              <li key={i}>
                <button>
                  {b}
                  <AiFillLinkedin />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button>
          <FaSlack />
        </button>
        <ul className="close">
          {/* <li>
            <button className="download">
              Slack 다운로드 <IoIosCloudDownload />
            </button>
          </li>
          <li>
            <button>개인 정보 보호</button>
          </li>
          <li>
            <button>약관</button>
          </li>
          <li>
            <button>쿠키 기본 설정</button>
          </li>
          <li>
            <button>
              귀하의 개인정보 보호 선택 <FaRegCheckCircle />
            </button>
          </li> */}
          <span>
            ©2024 Slack Technologies, LLC, a Salesforce company. All rights
            reserved. 각 상표는 해당 소유자의 소유입니다.
          </span>
          {bk.map((k, i) => {
            return (
              <li key={i}>
                <button>{k}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
