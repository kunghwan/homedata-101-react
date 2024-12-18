import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Transfer from "./components/Transfer";
import WorkSpace from "./components/WorkSpace";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Transfer />
        <WorkSpace />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
