import React, { useState } from "react";

const Post = ({ post, deletePost, updatePost }) => {
  const [editingPost, setEditingPost] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedText, setEditedText] = useState(post.text);

  const handleEdit = () => {
    setEditingPost(true);
  };

  const handleSave = () => {
    updatePost(post.id, { title: editedTitle, text: editedText });
    setEditingPost(false);
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="bg-white text-black rounded-lg shadow-md p-6 mx-auto max-w-xl w-full mb-8">
      {editingPost ? (
        <div className="flex flex-col">
          <label htmlFor="editedTitle" className="mb-2">
            Edit title:
          </label>
          <input
            type="text"
            id="editedTitle"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded border border-gray-300"
          />
          <label htmlFor="editedText" className="mb-2">
            Edit text:
          </label>
          <textarea
            id="editedText"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full h-48 px-4 py-2 mb-4 rounded border border-gray-300"
          />
          <div className="flex">
            <button
              onClick={handleSave}
              className="px-2 py-2 bg-green-500 text-white rounded cursor-pointer w-20 mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setEditingPost(false)}
              className="px-2 py-2 bg-gray-500 text-white rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="mb-4">{post.text}</p>
          <div className="flex">
            <button
              onClick={handleEdit}
              className="px-2 py-2 bg-blue-500 text-white rounded cursor-pointer mt-4 mb-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-2 py-2 bg-red-500 text-white rounded cursor-pointer mt-4 mb-2"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
