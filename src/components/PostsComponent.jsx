import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { PostsContext2 } from "../context/PostsContext2";

const PostsComponent = ({ category }) => {
  const PostsContextType =
    category === "Category1" ? PostsContext : PostsContext2;
  const { posts } = useContext(PostsContextType);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
