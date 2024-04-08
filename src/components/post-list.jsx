import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./posts"

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-3">
      <div className="text-primary mb-3">
        <Posts posts = {posts} loading={loading} />
      </div>
    </div>
  );
}

export default PostList;
