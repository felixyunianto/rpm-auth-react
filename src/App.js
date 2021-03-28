import Navbar from "./components/navbar/Navbar";
// import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";

import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn/SignIn";
import SignUp from "./components/screens/SignUp";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/create-post" component={CreatePost} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
