import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { currentUser, userLoggedIn, signOutUser } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header className="flex justify-center items-center h-16 bg-blue-500 fixed w-full top-0 z-50">
      <nav className="flex justify-between w-full md:w-1/2 px-4 md:px-0">
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
        <div className="flex items-center ml-auto mt-2 space-x-2 flex-wrap">
          {userLoggedIn ? (
            <div className="flex items-center">
              <p className="text-white mr-2 md:block hidden">
                Logged in as {currentUser.email}
              </p>
              <button
                onClick={signOutUser}
                className="bg-gray-200 text-black py-1 px-2 rounded hover:bg-gray-300 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-gray-300 text-gray-900 py-1 px-2 rounded hover:bg-gray-400 transition duration-200 mr-2 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-900 hover:text-gray-700 py-1 px-2 border border-gray-900 rounded transition duration-200 font-medium"
              >
                Register
              </Link>
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
