import React, { useState } from "react";
import "./SignIn.css";
import igPhoneImages from "../../../assets/ig-phone.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSignInAction } from "../../../redux/actions/auth";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch(authSignInAction({ email, password })).then((data) => {
      console.log(data);
    });
    props.history.push("/");
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative text-center">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/4 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-end relative">
            <img src={igPhoneImages} width="500" />
          </div>
          <div className="lg:w-2/4 md:w-1/2 bg-white flex flex-col w-full md:py-20 mt-8 md:mt-0">
            <div className="w-7/12 p-12 border">
              <h2 className="text-gray-900 form-title text-xl mb-20 title-font">
                Instagram
              </h2>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Phone number, username, or email"
                  className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="text-white w-full bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                Sign In
              </button>
              <div className="separator font-bold text-gray-500">OR</div>
              <div>Log In with Facebook</div>
              <div>Forgot password?</div>
            </div>
            <div className="w-7/12 p-10 border mt-4">
              Don't have a account ? <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
