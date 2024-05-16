import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import { PostsProvider2 } from "./context/PostsContext2";
import { CommentsProvider } from "./context/CommentsContext";
import { CommentsProvider2 } from "./context/CommentsContext2";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Write from "./pages/Write";
import UserPosts from "./pages/UserPosts";
import List from "./pages/List";
import Home from "./pages/Home";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import PrivateRoutes from "./components/PrivatesRoutes";

const App = () => {
  return (
    <AuthProvider>
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
                  <Route path="/register" element={<RegisterComponent />} />
                  <Route path="/login" element={<LoginComponent />} />
                  <Route path="/list" element={<List />} />
                  <Route element={<PrivateRoutes />}>
                    <Route path="/write" element={<Write />} />
                    <Route path="/user-posts" element={<UserPosts />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </CommentsProvider2>
          </CommentsProvider>
        </PostsProvider2>
      </PostsProvider>
    </AuthProvider>
  );
};

export default App;
