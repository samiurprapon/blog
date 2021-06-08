import React from "react";

import "./Layout.css";

import Profile from "../../containers/profile/Profile";
import RecentHeader from "../../components/recentHeader/RecentHeader";
import RecentPost from "../../components/recentPost/RecentPost";

const Layout = (props) => {
  return (
    <div className="container">
      <section className="blog-posts">
        {/* <div>Blog Posts</div> */}
      </section>

      <section className="sidebar">
        <div className="items">
          <RecentHeader />
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
