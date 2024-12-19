import React from "react";
import "./Client_Navbar.css";
import { IoHomeSharp } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineListBullet } from "react-icons/hi2";

const Client_Navbar = () => {
  return (
    <nav id="client">
      <ul>
        <li>
          <button className="one">1</button>
        </li>
        <li>
          <button className="home">
            <IoHomeSharp />
          </button>
        </li>
        <li>
          <button>
            <LuMessageCircle />
          </button>
        </li>
        <li>
          <button>
            <CiBellOn />
          </button>
        </li>
        <li>
          <button>
            <HiOutlineListBullet />
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button className="plus">+</button>
        </li>
        <li>
          <button className="user">
            D <span />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Client_Navbar;
