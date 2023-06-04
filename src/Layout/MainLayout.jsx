import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Popup from "../Components/Popup";

const MainLayout = ({ popup, setPopup, data, click }) => {
  return (
    <div>
      {popup && <Popup setPopup={setPopup} data={data} click={click} />}
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
