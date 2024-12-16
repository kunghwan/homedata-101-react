import React from "react";

const Gal = () => {
  return (
    <div id="gal">
      <div className="wrap">
        <img src={img} />
        <button className="left">{"<"}</button>
        <button className="right">{">"}</button>
        <div className="txts">
          <h1>트렁크</h1>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default Gal;

const img =
  "https://cdn.pixabay.com/photo/2018/08/25/14/48/indian-ocean-3630244_1280.jpg";
