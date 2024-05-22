import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [comments, setComments] = useState([
    {
      id: 1,
      postId: 1,
      username: "User 1",
      text: "Great post!",
      category: "Category1",
    },
    {
      id: 2,
      postId: 2,
      username: "User 2",
      text: "Interesting read.",
      category: "Category1",
    },
    {
      id: 3,
      postId: 3,
      username: "User 3",
      text: "Thanks for sharing!",
      category: "Category2",
    },
    {
      id: 4,
      postId: 4,
      username: "User 4",
      text: "Nice post!",
      category: "Category2",
    },
  ]);

  const addComment = (postId, text, category) => {
    const username = currentUser ? currentUser.email : "Anonymous";
    const newComment = {
      id: comments.length + 1,
      postId,
      username,
      text,
      category,
    };
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};
