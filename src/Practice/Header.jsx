import React from "react";
import "./Header.css";
import { RiNetflixFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
  return (
    <div className="Header">
      <button className="title">
        <RiNetflixFill />
      </button>
      <ul className="list">
        <li>
          <button>
            <GrLanguage />
            언어
          </button>
        </li>
        <li>
          <button className="login">로그인</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
