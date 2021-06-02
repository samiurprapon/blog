import React from "react";
import "./RecentPost.css";

export default function RecentPost({ prof }) {
  return (
    <div className="card">
      <div className="blogList">
        <div className="blogImg">
          <img
            className="image"
            src={
              "https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
            } alt={""}
          />
        </div>

        <div className="blog-body">
          <div className="category">Moments</div>
          <div className="reading-time">3 min</div>

          <h5 align="left" className="title">
            TWINKLE TWINKLE LITTLE STAR
          </h5>
          <p className="blog-time">June 7, 2017</p>
        </div>
      </div>
    </div>
  );
}
