// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { PostsProvider } from "./context/PostsContext";
import { PostsProvider2 } from "./context/PostsContext2";
import { CommentsProvider } from "./context/CommentsContext";
import { CommentsProvider2 } from "./context/CommentsContext2";
import Header from "./components/Header";
import Write from "./pages/Write";
import UserPosts from "./pages/UserPosts";
import List from "./pages/List";
import Home from "./pages/Home";

const App = () => {
  return (
    <UserProvider>
      <PostsProvider>
        <PostsProvider2>
          <CommentsProvider>
            <CommentsProvider2>
              <BrowserRouter>
                <div style={{ marginBottom: "20px" }}>
                  <Header />
                </div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/write" element={<Write />} />
                  <Route path="/user-posts" element={<UserPosts />} />
                  <Route path="/list" element={<List />} />
                </Routes>
              </BrowserRouter>
            </CommentsProvider2>
          </CommentsProvider>
        </PostsProvider2>
      </PostsProvider>
    </UserProvider>
  );
};

export default App;
