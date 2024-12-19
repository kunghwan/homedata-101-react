import React from "react";
import "./Client_Header.css";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoMdTime,
} from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Client_Header = () => {
  return (
    <header id="client">
      <ul>
        <li>
          <button className="hi">
            <IoIosArrowRoundBack />
          </button>
        </li>
        <li>
          <button className="hi">
            <IoIosArrowRoundForward />
          </button>
        </li>
        <li>
          <button className="hi_2">
            <IoMdTime />
          </button>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="데이터시각화1기검색" />
        <button className="s">
          <IoSearch />
        </button>
      </form>
    </header>
  );
};

export default Client_Header;
