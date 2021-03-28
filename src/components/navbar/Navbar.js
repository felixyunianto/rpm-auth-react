import React, {useState} from "react";
import "./Navbar.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSignOutAction } from '../../redux/actions/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [logout, setLogout] = useState(false);

  const handleSignOut = () => {
    dispatch(authSignOutAction());
    setLogout(true)
  } 

  if(logout === true) {
    return <Redirect to="/sign-in" />
  }

  return (
    <header className="container mx-auto px-36 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to={currentUser !== null ? "/" : "#"}
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
              <button className="mr-5 hover:text-gray-900" onClick={handleSignOut}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
