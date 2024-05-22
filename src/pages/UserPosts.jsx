import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { AuthContext } from "../context/AuthContext";
import Post from "../components/Post";

const UserPosts = () => {
  const { currentUser } = useContext(AuthContext);
  const { posts, deletePost, updatePost } = useContext(PostsContext);

  const userPostsCategory1 = posts.filter(
    (post) => post.author === currentUser.email && post.category === "Category1"
  );
  const userPostsCategory2 = posts.filter(
    (post) => post.author === currentUser.email && post.category === "Category2"
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16 bg-gray-100">
      <h1 className="text-blue-500 text-3xl font-bold mb-8">Your Posts</h1>
      <div className="w-full max-w-xl">
        <h2 className="text-xl text-black mb-4">Category 1 Posts</h2>
        {userPostsCategory1.map((post) => {
          return (
            <div key={post.id} className="mb-4">
              <Post
                post={post}
                deletePost={deletePost}
                updatePost={updatePost}
              />
            </div>
          );
        })}
        <h2 className="text-xl text-black mb-4 mt-8">Category 2 Posts</h2>
        {userPostsCategory2.map((post) => {
          return (
            <div key={post.id} className="mb-4">
              <Post
                post={post}
                deletePost={deletePost}
                updatePost={updatePost}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPosts;
