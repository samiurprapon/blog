import React from "react";
import "./Layout.css";

import Profile from "../../containers/profile/Profile";

const Layout = (props) => {
  return (
    <div className="container">
      <section className="blog-posts">
        <div>Blog Posts</div>
      </section>

      <section className="sidebar">
        <div className="items">
          <Profile />
        </div>
      </section>
    </div>
  );
};

export default Layout;
