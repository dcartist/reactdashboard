import React from "react";
import HomeTopInformation from "./homeTopInformation";
import reactlogo from "../../logo.svg";

export default function home() {
  return (
    <div>
      <HomeTopInformation></HomeTopInformation>
      <img src={reactlogo} className="App-logo" alt="logo" />
    </div>
  );
}
