import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { ValidateCredentials } from "../utilities/validations";
// import BgBodyImage from "../images/BgBodyImg.jpg";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  //useRefs hook can also be used to fetch value from input fields if we don't want to iuse useStae hook.
  const email = useRef(null);
  const password = useRef(null);
  const handleSignUpSignIn = () => {
    setSignIn(!signIn);
    email.current.value=""
    password.current.value=""
    setErrorMsg(null)
  };

  //on Sign In or Sign Up of form, we will check the validations of email n password.
  const handlevalidations = (e) => {
    //validations are checked using regex
    e.preventDefault();
    const resultMsg = ValidateCredentials(
      email.current.value,
      password.current.value
    );
    setErrorMsg(resultMsg);
  };

  return (
    <>
      <div className="bg-bgBody bg-cover bg-no-repeat bg-fixed bg-center">
        <Header />
        <div className="flex flex-row items-center justify-center">
          {/* login form */}
          <form className="bg-black py-10 px-5 h-full w-[25%] mb-5 flex flex-col gap-5 rounded-md bg-opacity-70">
            <p className="text-white text-4xl mb-4">
              {signIn ? "Sign In !" : "Sign Up"}
            </p>
            {!signIn ? (
              <input
                type="text"
                placeholder="Full name"
                className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
              />
            ) : null}
            {!signIn ? (
              <input
                type="number"
                placeholder="Mobile number"
                className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
              />
            ) : null}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
            />
            {/* <br></br> */}
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="text-white placeholder:text-white p-2 mb-0 bg-gray-500 px-5 rounded-md"
            />
            {errorMsg ? <p className="text-red-400 text-xl font-semibold">{errorMsg}</p> : null}
            <button
              onClick={(e)=>handlevalidations(e)}
              onSubmit={(e) => e.preventDefault()}
              className="font-semibold bg-red-600 border-red-800 mt-4 text-white rounded-md p-2"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-xl text-white">
              {signIn ? (
                <span>
                  New to Netflix ?{" "}
                  <span
                    onClick={handleSignUpSignIn}
                    className="text-red-400 cursor-pointer"
                  >
                    Sign Up !
                  </span>
                </span>
              ) : (
                <span>
                  Already a User ?{" "}
                  <span
                    onClick={handleSignUpSignIn}
                    className="text-red-400 cursor-pointer"
                  >
                    Sign In !
                  </span>
                </span>
              )}
            </p>
          </form>
          {/* signup form */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
