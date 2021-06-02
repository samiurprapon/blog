import React from "react";
import { Fade } from "react-reveal";

import "./Layout.css";

import Profile from "../../containers/profile/Profile";
import RecentHeader from "../../components/recentHeader/RecentHeader";
import RecentPost from "../../components/recentPost/RecentPost";

const Layout = (props) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="container">
        <section className="blog-posts">
          <div>Blog Posts</div>
        </section>

        <section className="sidebar">
          <div className="items">
            <RecentHeader />
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <br/>
          </div>

          <div className="items">
            <Profile />
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Layout;
