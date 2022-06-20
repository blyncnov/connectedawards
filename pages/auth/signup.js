import React from "react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SignUp = () => {
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
              <h4 className="a">Time to vote your favourite Techie,</h4>
              <h4 className="b">lets make this amazing!</h4>
              <h4 className="c">
                Dont have an account?{" "}
                <span>
                  {" "}
                  <Link href="/auth/login">
                    <a style={{ color: "orange" }}>Log in</a>
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
              <form>
                <div className="side-by-side">
                  <div>
                    <label htmlFor="Fname">
                      First Name <span>*</span>{" "}
                    </label>
                    <input type="text" className="g" />
                  </div>
                  <div>
                    <label htmlFor="Lname">
                      Last Name <span>*</span>{" "}
                    </label>
                    <input type="text" className="g" />
                  </div>
                </div>
                <label htmlFor="username">
                  Email Address <span>*</span>{" "}
                </label>
                <input type="text" className="g" />
                <label htmlFor="password">
                  Phone Number <span>*</span>{" "}
                </label>
                <input type="text" className="g" />
                <label htmlFor="PhoneNumber">
                  Set Password <span>*</span>{" "}
                </label>
                <input type="text" className="g" />
                <label htmlFor="gender">
                  Gender<span>*</span>{" "}
                </label>
                <select name="gender" id="cars">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <br />
                <input
                  type="submit"
                  className="submit"
                  value="Create my account"
                />
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

export default SignUp;

SignUp.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
