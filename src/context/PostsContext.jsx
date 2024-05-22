import React, { createContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane Doe",
      category: "Category1",
    },
    {
      id: 2,
      title: "Post 2",
      text: "Vivamus eget erat ac purus faucibus molestie. Nam luctus, mauris nec vestibulum feugiat, justo odio consectetur ante, vitae convallis felis enim non velit. Curabitur lacinia turpis eu commodo aliquet. Integer eget justo velit.",
      author: "Jane Doe",
      category: "Category1",
    },
    {
      id: 3,
      title: "Post 1",
      text: "Suspendisse nec eleifend mi. Mauris aliquam lectus sit amet ligula venenatis, vel viverra odio feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lacinia nec elit eget finibus.",
      author: "Jessica Doe",
      category: "Category2",
    },
    {
      id: 4,
      title: "Post 2",
      text: "Cras consectetur ipsum nec pharetra ultricies. Nulla facilisi. Sed mattis, enim sit amet hendrerit gravida, felis est ultricies risus, nec scelerisque justo velit ac mi. Maecenas tincidunt libero eget erat fermentum ullamcorper.",
      author: "Jessica Doe",
      category: "Category2",
    },
  ]);

  const addPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  const updatePost = (id, updatedPost) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      );
    });
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};
