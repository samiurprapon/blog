import React from "react";
import { Fade } from "react-reveal";

import "./RecentPost.css";

export default function RecentPost({ prof }) {
  return (
    <Fade bottom duration={900} distance="25px">
      <div className="card">
        <div className="blogList">
          <div className="blogImg">
            <img
              className="image"
              src={
                "https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
              }
              alt={""}
            />
          </div>

          <div className="blog-body">
            <div className="category">Philosophy</div>
            <div className="reading-time">3 min</div>

            <h4 align="left" className="title">
              World is Diamond Shaped
            </h4>
            <p className="blog-time">June 7, 2017</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
