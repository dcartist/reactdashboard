import React from "react";
import HomeTopInformation from "./HomeTopInformation";
import reactlogo from "../../logo.svg";
import Counter from "../../components/Counter";
import reactbackground from "../../images/reactbackground.jpg";
import redImage from "../../images/redbackground.jpg";
import filestructure from "../../images/filestructure.png"
import code from "../../images/code.jpg";
import Parallax from "../../components/Parallax";
import wireframe from "../../images/wireframe.png";
import TitleTags from "../../components/TitleTags"
import writeframeDeconstructed from "../../images/wireframe_deconstructed.png";
import "./home.css";
export default function Home() {
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
     <TitleTags></TitleTags>
      <div style={newStyle}></div>
      <HomeTopInformation></HomeTopInformation>

      <Parallax height="80" backgroundurl={redImage}></Parallax>

      <div className="container paddedContainer">
        <div className="row">
          <div className="text-center">
            <img src={wireframe}></img>
            <img src={writeframeDeconstructed}></img>

            <p>Imagine how this actually works</p>
            <Counter></Counter>

            <p>This file structure of creating an react app looks like this</p>
          <img src={filestructure} alt="filestructure"/>

          </div>
        </div>
      </div>

      <Parallax height="80" backgroundurl={code}></Parallax>
    </div>
  );
}
