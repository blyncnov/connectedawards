import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const IsClickedHandler = () => {
    setIsClicked(!isClicked);
    console.log("i love click");
  };

  return (
    <>
      <div className="Navigation__Container">
        <div className="max__width">
          <div className="Navigation__Container--Navbar">
            <div className="Navigation__Column">
              <div className="Navigation__Row">
                <div className="Navigation__Logo">
                  <li>
                    <Link href="/">
                      <a>
                        <Image
                          src="/logo.svg"
                          alt="logo"
                          height="70px"
                          width="70px"
                        />
                      </a>
                    </Link>
                  </li>
                </div>
                <div
                  className={
                    isClicked
                      ? "Navigation__Items activeno"
                      : "Navigation__Items"
                  }
                >
                  <ul className="Navigation__Lists">
                    <li>Categories</li>

                    <li>
                      <Link href="/techies">
                        <a style={{ color: "black" }}>Past editions</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/future">
                        <a style={{ color: "black" }}> Future editions</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/about">
                        <a style={{ color: "black" }}> About us</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/donations">
                        <a style={{ color: "black" }}>Make a donation</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="Navigation__Actions">
                    <Link href="/auth/login">
                      <a style={{ color: "#1f0231" }}>
                        <button className="button Navigation__btn-1">
                          Log in
                        </button>
                      </a>
                    </Link>

                    <Link href="/auth/signup">
                      <a style={{ color: "white" }}>
                        <button className="button Navigation__btn-2">
                          Create Account
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="Navigation__Mobile" onClick={IsClickedHandler}>
                  {isClicked ? (
                    <FaTimes style={{ fontSize: "1.5em" }} />
                  ) : (
                    <FaBars style={{ fontSize: "1.5em" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
