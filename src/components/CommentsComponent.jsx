import React, { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import { CommentsContext2 } from "../context/CommentsContext2";
import { UserContext } from "../context/UserContext";
import CommentForm from "./CommentForm";

const CommentsComponent = ({ postId, category, showCommentForm }) => {
  const commentsContext =
    category === "Category1" ? CommentsContext : CommentsContext2;
  const { comments } = useContext(commentsContext);
  const { username } = useContext(UserContext);

  const postComments = comments.filter(
    (comment) => comment.postId === postId && comment.category === category
  );

  return (
    <div>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>By: {comment.username}</p>
        </div>
      ))}
      {username && showCommentForm && (
        <div>
          <p>Add a new comment:</p>
          <CommentForm postId={postId} />
        </div>
      )}
    </div>
  );
};

export default CommentsComponent;
