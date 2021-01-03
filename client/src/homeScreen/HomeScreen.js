import "./homeScreen.scss";
import bell from "./../assets/bell.png";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

function HomeScreen(props) {
  return (
    <Router>
      <div id="homescreen-background" className="centered-container">
        <div id="homescreen-container">
          <Switch>
            <Route path="/home/signin">
              <SignBox signIn={true} />
            </Route>
            <Route path="/home/signup">
              <SignBox signIn={false} />
            </Route>
            <Route path="/home">
              <div
                id="homescreen-container-left"
                className="image-centered-container"
              >
                <img id="homescreen-logo" src={bell} alt="Tinko" />
                <div></div>
              </div>
              <div id="homescreen-container-right">
                <div id="homescreen-title">TINKO</div>
                <div id="homescreen-subtitle">
                  An effective tool for team communication.
                </div>
                <div id="homescreen-container-buttons-container">
                  <Link to="/home/signup">
                    <button
                      id="homescreen-button1"
                      className="homescreen-button"
                    >
                      <span className="white-font font-bold-weight">
                        Get started
                      </span>
                    </button>
                  </Link>
                  <Link to="/home/signin">
                    <button
                      id="homescreen-button2"
                      className="homescreen-button"
                    >
                      <span>Have an account? </span>
                      <span className="orange-font font-bold-weight">
                        Sign in
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function SignBox(props) {
  const signIn = props.signIn;
  return (
    <div id="signpage-container">
      <div id="signpage-title">{signIn ? "Sign in" : "Get started"}</div>
      <form>
        <div id="signbox-container">
          <input type="text" placeholder="Email address" />
          <div className="signbox-underline" id="signbox-underline1"></div>
          <input type="password" placeholder="Password" />
          <div className="signbox-underline"></div>
          <div></div>
        </div>
        <button
          type="submit"
          id="sign-button"
          className="homescreen-button white-font font-bold-weight"
        >
          {signIn ? "Sign in" : "Sign up"}
        </button>
      </form>
      <p id="password-forget" className="hover-underline">
        {signIn ? "Forgot your password?" : ""}
      </p>
      <p>
        {signIn ? "Don't have an account? " : "Have an account? "}
        <Link to={signIn ? "/home/signup" : "/home/signin"}>
          <span className="hover-underline orange-font">
            {signIn ? "Sign up" : "Sign in"}
          </span>
        </Link>
      </p>
    </div>
  );
}

export default HomeScreen;
