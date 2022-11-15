import React from "react";
import InfoAccordion from "../../components/InfoAccordion";
import Headline from "../../components/Headline";
import Parallax from "../../components/Parallax"
import code from "../../images/code.jpg"
export default function Info() {
  return (
    <div>
      <Parallax height="40" backgroundurl={code}/>
      <div className="container">
      <Headline title="INFO"></Headline>
      <InfoAccordion></InfoAccordion>
      </div>
      
    </div>
  );
}
