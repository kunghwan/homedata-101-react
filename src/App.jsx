import React from "react";
import Header from "./Practice/Header";
import Gal from "./Practice/Gal";
import Ninput from "./Practice/Ninput";
import Detail from "./Practice/Detail";
import Poster from "./Practice/Poster";
import Reason from "./Practice/Reason";
import FAQ from "./Practice/FAQ";
import LB from "./Practice/LB";
// import Cal from "./Practice/Cal";
// import MQ from "./Practice/MQ";
// const name = "ykh";
// console.log(name);
// let age = 25;
// console.log(age);
// age = 30;
// console.log(age);
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Gal />
        <Ninput />
        <Detail />
        <Poster />
        <Poster />
        <Poster />
        <Reason />
        <FAQ />
        <LB />
      </main>
    </div>
  );
};

export default App;
