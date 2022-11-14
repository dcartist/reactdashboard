import React from "react";
import HomeTopInformation from "./homeTopInformation";
import reactlogo from "../../logo.svg";
import reactbackground from "../../images/reactbackground.jpg";

export default function home() {
  const newStyle = {
    height: "70vh",
    width: "100vw",
    backgroundImage: `url(${reactbackground})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <HomeTopInformation></HomeTopInformation>
      <div style={newStyle}></div>

      <img src={reactlogo} className="App-logo" alt="logo" />
    </div>
  );
}
