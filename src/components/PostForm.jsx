import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostsContext";
import { v4 as uuidv4 } from "uuid";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Category1");
  const { currentUser } = useContext(AuthContext);
  const { addPost } = useContext(PostsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const author = currentUser ? currentUser.email : "Anonymous";
    addPost({ id: uuidv4(), author, title, text, category });
    setTitle("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-4 mt-8 px-4"
    >
      <h1 className="text-2xl font-bold text-blue-500 mb-4">
        Write your own post
      </h1>
      <label htmlFor="category" className="text-base text-gray-700">
        Choose Category
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-80 px-4 py-2 border border-gray-300 rounded"
      >
        <option value="Category1">Category 1</option>
        <option value="Category2">Category 2</option>
      </select>
      <label htmlFor="title" className="text-base text-gray-700">
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Choose a title..."
        required
        className="w-80 px-4 py-2 rounded border border-gray-300"
      />
      <label htmlFor="text" className="text-base text-gray-700">
        Text
      </label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post here..."
        required
        className="w-80 h-48 px-4 py-2 rounded border border-gray-300"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
