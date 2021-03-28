import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authsignUpAction } from '../../redux/actions/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const {msgInvalid} = useSelector((state) => state.auth);
  const history = useHistory();
  const [dataSignUp, setDataSignUp] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataSignUp({ ...dataSignUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(authsignUpAction(dataSignUp));
    history.push('/');
  };

  return (
    <div className="flex flex-col items-center mt-10 text-center">
      {msgInvalid && (
        <div
          class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 -mt-4 mb-2"
          role="alert"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <p>Something happened that you should know about.</p>
        </div>
      )}

      <div className="p-12 border" style={{ width: 450 }}>
        <h2 className="text-gray-900 form-title text-xl mb-10 title-font">
          Instagram
        </h2>
        <h4 className="text-xl text-gray-400 font-bold mb-7">
          Sign up to see photos and videos from your friends.
        </h4>
        <button className="text-white w-full bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
          Sign in with Facebook
        </button>
        <div className="separator font-bold text-gray-500">OR</div>
        <div className="relative mb-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Mobile number or email"
            className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            value={dataSignUp.email}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={dataSignUp.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            value={dataSignUp.username}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={dataSignUp.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="text-white w-full bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <div>
          <p className="text-md mt-7 text-gray-600 font-medium">
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </div>
      </div>
      <div className="p-10 border mt-4" style={{ width: 450 }}>
        Have an account ? <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
