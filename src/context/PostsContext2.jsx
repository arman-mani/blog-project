import React, { createContext, useState } from "react";

export const PostsContext2 = createContext();

export const PostsProvider2 = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      author: "Jessica Doe",
      text: "Suspendisse nec eleifend mi. Mauris aliquam lectus sit amet ligula venenatis, vel viverra odio feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lacinia nec elit eget finibus. ",
    },
    {
      id: 2,
      title: "Post 2",
      author: "Jessica Doe",
      text: "Suspendisse nec eleifend mi. Mauris aliquam lectus sit amet ligula venenatis, vel viverra odio feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lacinia nec elit eget finibus. .",
    },
    {
      id: 3,
      title: "Post 3",
      author: "Jessica Doe",
      text: "Suspendisse nec eleifend mi. Mauris aliquam lectus sit amet ligula venenatis, vel viverra odio feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lacinia nec elit eget finibus. .",
    },
  ]);

  const addPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const updatePost = (postId, newData) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, ...newData } : post
      )
    );
  };

  return (
    <PostsContext2.Provider value={{ posts, addPost, deletePost, updatePost }}>
      {children}
    </PostsContext2.Provider>
  );
};
