import React from "react";
import Client_Header from "./client_components/Client_Header";
import Client_Navbar from "./client_components/Client_Navbar";
import Client_Aside from "./client_components/Client_Aside";
import Client_Main from "./client_components/Client_Main";

const Client = () => {
  return (
    <>
      <Client_Header />
      <Client_Navbar />
      <main id="client">
        <Client_Aside />
        <Client_Main />
      </main>
    </>
  );
};

export default Client;
