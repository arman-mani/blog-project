import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { PostsContext2 } from "../context/PostsContext2";
import Post from "../components/Post";
import { AuthContext } from "../context/AuthContext";

const UserPosts = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    posts: posts1,
    deletePost: deletePost1,
    updatePost: updatePost1,
  } = useContext(PostsContext);
  const {
    posts: posts2,
    deletePost: deletePost2,
    updatePost: updatePost2,
  } = useContext(PostsContext2);

  const userPosts1 = posts1.filter(
    (post) => post.author === currentUser.email && post.category === "Category1"
  );
  const userPosts2 = posts2.filter(
    (post) => post.author === currentUser.email && post.category === "Category2"
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16 bg-gray-100">
      <h1 className="text-blue-500 text-3xl font-bold mb-8">Your Posts</h1>
      <div className="w-full max-w-xl">
        <h2 className="text-xl text-black mb-4">Category 1 Posts</h2>
        {userPosts1.map((post) => (
          <div key={post.id} className="mb-4">
            <Post
              post={post}
              deletePost={deletePost1}
              updatePost={updatePost1}
            />
          </div>
        ))}
        <h2 className="text-xl text-black mb-4 mt-8">Category 2 Posts</h2>
        {userPosts2.map((post) => (
          <div key={post.id} className="mb-4">
            <Post
              post={post}
              deletePost={deletePost2}
              updatePost={updatePost2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
