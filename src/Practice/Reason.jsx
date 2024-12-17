import React from "react";
import "./Reason.css";
import { GrAccessibility } from "react-icons/gr";
const Rea = [
  {
    desc: "취향야 딱 맞는 이야기",
    Icons: GrAccessibility,
  },
  {
    desc: "취향야 딱 맞는 이야기",
    Icons: GrAccessibility,
  },
  {
    desc: "취향야 딱 맞는 이야기",
    Icons: GrAccessibility,
  },
  {
    desc: "취향야 딱 맞는 이야기",
    Icons: GrAccessibility,
  },
];

const Reason = () => {
  return (
    <div className="re">
      <h3>가입해야 하는 또 다른 이유</h3>
      {/* <ul>
        <li>
          <div>
            <p>취항야 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
        <li>
          <div>
            <p>취항야 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
        <li>
          <div>
            <p>취항야 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
        <li>
          <div>
            <p>취항야 딱 맞는 이야기</p>
            <GrAccessibility />
          </div>
        </li>
      </ul> */}
      <ul>
        {Rea.map((R, i) => {
          return (
            <li key={i}>
              <div>
                <p>{R.desc}</p>
                <R.Icons />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reason;
