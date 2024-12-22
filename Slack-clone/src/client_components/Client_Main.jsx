import React from "react";
import Client_main_Head from "./client_main/Client_main_Head";
import Client_main_Body from "./client_main/Client_main_Body";
import Client_main_Btm from "./client_main/Client_main_Btm";

const Client_Main = () => {
  return (
    <div id="client">
      <Client_main_Head />
      <Client_main_Body />
      <Client_main_Btm />
    </div>
  );
};

export default Client_Main;
