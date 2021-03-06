import React from "react";
import "./RecentHeader.css";
import { Fade } from "react-reveal";

export default function RecentHeader(props) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="row">
          <h1 className="prof-title">{props.title}</h1>
        </div>
      </div>
    </Fade>
  );
}
