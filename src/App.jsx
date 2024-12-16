import React from "react";
import Header from "./Practice/Header";
import Gal from "./Practice/Gal";
import Ninput from "./Practice/Ninput";
import Detail from "./Practice/Detail";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Gal />
        <Ninput />
        <Detail />
      </main>
    </div>
  );
};

export default App;
