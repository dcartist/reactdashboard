import React from "react";

export default function Parallax(props) {
  const newStyle = {
    height: `${props.height}vh`,
    width: "100vw",
    backgroundImage: `url(${props.backgroundurl})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };
  return <div style={newStyle}></div>;
}
