import React from "react";
import HomeTopInformation from "./homeTopInformation";
import reactlogo from "../../logo.svg";
import reactbackground from "../../images/reactbackground.jpg";
import redImage from "../../images/redbackground.jpg";
import Parallax from "../../components/Parallax";

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
      <div style={newStyle}></div>
      <HomeTopInformation></HomeTopInformation>
      <Parallax height="80" backgroundurl={redImage}></Parallax>
      <img src={reactlogo} className="App-logo" alt="logo" />
    </div>
  );
}
