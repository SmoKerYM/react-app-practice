import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div style={{ color: "black" }}>
        <span style={{ fontSize: "20px" }}>Loading {"  "}</span>
        <FontAwesomeIcon icon={faSpinner} spin size="1.5x" />
      </div>
    );
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );

  return <div></div>;
};

export default Posts;
