import React from "react";

import "./Layout.css";
import Blog from "../list/PostList";
import Profile from "../profile/Profile";
import RecentHeader from "../recentHeader/RecentHeader";
import RecentPost from "../recentPost/RecentPost";

const Layout = (props) => {
  return (
    <div className="container">
      <section className="blog-posts">
        <div>
          <Blog/>
        </div>
      </section>

      <section className="sidebar">
        <div className="items">
          <RecentHeader title={props.recent.title}/>
          <RecentPost />
          <RecentPost />
          <RecentPost />
          <br />
        </div>

        <div className="items">
          <Profile />
        </div>
      </section>
    </div>
  );
};

export default Layout;
