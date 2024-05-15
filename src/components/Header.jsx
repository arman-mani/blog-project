import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { username, handleLogin, handleLogout } = useContext(UserContext);
  const [inputUsername, setInputUsername] = useState("");
  const location = useLocation();

  return (
    <header className="flex justify-center items-center h-16 bg-blue-500 fixed w-full top-0 z-50">
      <nav className="flex justify-between w-1/2">
        <CustomNavLink to="/" active={location.pathname === "/"}>
          Home
        </CustomNavLink>
        <CustomNavLink to="/write" active={location.pathname === "/write"}>
          Write
        </CustomNavLink>
        <CustomNavLink
          to="/user-posts"
          active={location.pathname === "/user-posts"}
        >
          Your Posts
        </CustomNavLink>
        <CustomNavLink to="/list" active={location.pathname === "/list"}>
          List
        </CustomNavLink>
        <div className="flex items-center ml-auto mt-2">
          {username ? (
            <>
              <img
                src="src\assets\Profile-Avatar-PNG.png"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <p className="text-white mr-2">Logged in as {username}</p>
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-black py-1 px-2 rounded hover:bg-gray-300 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <p className="text-transparent mr-2">Placeholder</p>
              <input
                type="text"
                placeholder="Login as John Doe"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleLogin(inputUsername);
                }}
                className="text-black mr-2"
              />
              <button
                onClick={() => {
                  handleLogin(inputUsername);
                  setInputUsername("");
                }}
                className="bg-gray-200 text-black py-1 px-2 rounded hover:bg-gray-300 transition duration-200"
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

const CustomNavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`text-lg mr-4 mt-2 hover:text-gray-200 transition duration-200 relative ${
      active ? "text-gray-200" : "text-white"
    }`}
  >
    {children}
    {active && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200"></div>
    )}
  </Link>
);

export default Header;
