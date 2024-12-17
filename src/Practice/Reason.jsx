import React from "react";
import "./Reason.css";
import { GrAccessibility } from "react-icons/gr";
const rea = [
  {
    desc: "취향에 딱 맞는 이야기",
    Icon: GrAccessibility,
  },

  {
    desc: "취향에 딱 맞는 이야기",
    Icon: GrAccessibility,
  },

  {
    desc: "취향에 딱 맞는 이야기",
    Icon: GrAccessibility,
  },
  {
    desc: "취향에 딱 맞는 이야기",
    Icon: GrAccessibility,
  },
];
const Reason = () => {
  return (
    <div id="re">
      <h3>가입해야 하는 또 다른 이유</h3>
      {/* <ul>
        <li>
          <div>
            <p>취향에 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
        <li>
          <div>
            <p>취향에 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
        <li>
          <div>
            <p>취향에 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
        <li>
          <div>
            <p>취향에 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
      </ul> */}
      <ul>
        {rea.map((r, i) => {
          return (
            <li key={i}>
              <div>
                <p>{r.desc}</p>
                <r.Icon />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reason;
