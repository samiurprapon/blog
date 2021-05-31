import React from "react";
import blogImg from '../../assets/images/blog-img.jpg';
import "./blogCard.css";

const BlogList = () => {
  return (
    <div className="blogList">
      <div className="blogImg"><img src={blogImg} alt="blog-img" height="250px" width="auto"  /></div>
      <div className="blog-body">
        <p className="category">Moments<span className="time">3 min</span></p>
        <h4>TWINKLE TWINKLE LITTLE STAR</h4>
        <p className="blog-time">June 7, 2017</p>
        <p className="blog-text">
          Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et
          magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque euro, pretium quis, sem. Nulla…
        </p>
      </div>
    </div>
  );
};

export default BlogList;
