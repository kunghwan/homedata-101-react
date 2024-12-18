import React from "react";
import "./Header.css";
import { FaSlack } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header id="header">
      <button>
        <FaSlack />
        <p>slack</p>
      </button>
      <button>
        <IoMenuSharp />
      </button>
    </header>
  );
};

export default Header;
