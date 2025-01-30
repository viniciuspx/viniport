import React from "react";
import "../assets/css/blog.css";
import Posts from "./posts";
import posts from "./../blog/posts.json";

const Blog = () => {
  return (
    <div className="main">
      <Posts posts={posts} />
    </div>
  );
};

export default Blog;
