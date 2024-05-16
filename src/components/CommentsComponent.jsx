import React, { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";
import { CommentsContext2 } from "../context/CommentsContext2";
import { AuthContext } from "../context/AuthContext";
import CommentForm from "./CommentForm";

const CommentsComponent = ({ postId, category, showCommentForm }) => {
  const commentsContext =
    category === "Category1" ? CommentsContext : CommentsContext2;
  const { comments } = useContext(commentsContext);
  const { currentUser } = useContext(AuthContext); // Destructure currentUser

  const postComments = comments.filter(
    (comment) => comment.postId === postId && comment.category === category
  );

  return (
    <div>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>
            By:{" "}
            {currentUser
              ? currentUser.displayName || currentUser.email
              : "John Doe"}
          </p>
        </div>
      ))}
      {currentUser && showCommentForm && (
        <div>
          <p>Add a new comment:</p>
          <CommentForm postId={postId} />
        </div>
      )}
    </div>
  );
};

export default CommentsComponent;
