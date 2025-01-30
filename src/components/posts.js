import React from "react";
import "../assets/css/blog.css";

const formatDate = (date) => {
  return date;
};

const formatPost = (content, images) => {
  if (images) {
    images.forEach((image) => {
      content = content.replace(
        "#IMG#",
        `<img src="${image}" alt="post image" class="image"/> <br/> <br/>`
      );
    });
  }
  var postEl = document.createElement("post");
  postEl.innerHTML = content;
  return postEl;
};

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: formatPost(post.content, post.images).outerHTML,
            }}
            className="inner_post"
          />
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
