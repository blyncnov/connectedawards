import React from "react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="Login__Container">
        <div className="max__width">
          <div className="Login__Column">
            <h5 className="goBackHome">
              <FaLongArrowAltLeft />{" "}
              <Link href="/">
                <a style={{ color: "black" }}>Home</a>
              </Link>
            </h5>
            <br />
            <div className="Login__Text">
              <h4 className="a">Lets pick up where we left off, yeah?</h4>
              <h4 className="b">Log in to your account</h4>
              <h4 className="c">
                Dont have an account?{" "}
                <span>
                  <Link href="/auth/signup">
                    <a style={{ color: "orange" }}>Sign Up</a>
                  </Link>
                </span>{" "}
              </h4>
              <button className="button Login__Button">
                <FcGoogle />
                Continue with Google
              </button>
            </div>
            <br></br>
            <h5 className="hr">
              {" "}
              -------------------- OR ----------------------
            </h5>
            <br></br>
            <div className="Login__Form">
              <form className="auth__Form">
                <label htmlFor="username">
                  Email Address <span>*</span>{" "}
                </label>
                <input type="text" className="g" />
                <label htmlFor="password">
                  Password <span>*</span>{" "}
                </label>
                <input type="text" className="g" />
                <br />
                <input type="submit" className="submit" value="Login" />
              </form>
              <br />
              <h5 style={{ color: "#1f0231" }}>Forgot Password</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
