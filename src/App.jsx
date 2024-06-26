import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import { CommentsProvider } from "./context/CommentsContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Write from "./pages/Write";
import UserPosts from "./pages/UserPosts";
import Home from "./pages/Home";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import PrivateRoutes from "./components/PrivatesRoutes";

const App = () => {
  return (
    <AuthProvider>
      <PostsProvider>
        <CommentsProvider>
          <BrowserRouter>
            <div style={{ marginBottom: "20px" }}>
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/write" element={<Write />} />
                <Route path="/user-posts" element={<UserPosts />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CommentsProvider>
      </PostsProvider>
    </AuthProvider>
  );
};

export default App;
