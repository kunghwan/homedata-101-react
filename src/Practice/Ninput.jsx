import React from "react";
import "./Ninput.css";

const Ninput = () => {
  return (
    <div>
      <label htmlFor="email" className="label">
        시청할 준비가 되셨나요? 맴버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </label>
      <input
        type="text"
        id="email"
        className="input"
        placeholder="이메일을 입력해주세요."
      />
      <div className="start_l">
        <button className="start">시작하기{">"}</button>
      </div>
    </div>
  );
};

export default Ninput;
