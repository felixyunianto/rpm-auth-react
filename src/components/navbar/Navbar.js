import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log("Current User ", currentUser);

  return (
    <header className="container mx-auto px-36 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to={currentUser.length > 0 ? "/" : "#"}
        >
          <span className="ml-3 text-xxl navbar-title">Instagram</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {currentUser === null && (
            <>
              <Link className="mr-5 hover:text-gray-900" to="/sign-in">
                Sign In
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/sign-up">
                Sign Up
              </Link>
            </>
          )}
          {currentUser !== null && (
            <>
              <Link className="mr-5 hover:text-gray-900" to="/profile">
                Profile
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/create-post">
                Create Post
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
