import React from "react";
import "../assets/css/blog.css";

const formatDate = (date) => {
  return date;
};

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <br />
          <strong>
            <time>{formatDate(post.date)}</time>
          </strong>
          {"  "}Posted by <strong>{post.author}</strong>
        </div>
      ))}
    </div>
  );
};

export default Posts;
