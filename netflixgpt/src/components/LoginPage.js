import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateCredentials } from "../utilities/validations";
import { auth } from "../utilities/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";

// import BgBodyImage from "../images/BgBodyImg.jpg";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  //useRefs hook can also be used to fetch value from input fields if we don't want to use useStae hook.
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const phoneNumber = useRef(null);

  // useEffect(()=>{
  //   console.log("heyy");
  //   return ()=>{
  //     console.log("return");
  //   }
  // },[])

  const handleSignUpSignInButton = () => {
    setSignIn(!signIn);
    email.current.value = "";
    password.current.value = "";
    setErrorMsg(null);
  };

  //on Sign In or Sign Up of form, we will check the validations of email n password.
  const SignInSignUpLogic = (e) => {
    // validations are checked using regex
    e.preventDefault();
    // first we will check the validations for email and assword
    const resultMsg = ValidateCredentials(
      email.current.value,
      password.current.value
    );
    setErrorMsg(resultMsg);
    if (errorMsg) return;
  
    // on SignUp page
    if (!signIn) {
      createUserWithEmailAndPassword(
        // API for signing up user.
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up, so add logic what to do after signing up the user.
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current?.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  displayName,
                  email
                })
              );
              // navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode + "-" + errorMessage);
            });
  
          // console.log(user);
        })
        .catch((error) => {
          //when the user is already present so can't sign him up
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
    // on SignIn page
    else {
      signInWithEmailAndPassword(
        //API for signing in user.
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in, so now add logic for what to do after signing in the user up.
          // const user = userCredential.user;
          // navigate("/browse");
          // console.log(user);
          // const { uid, email,displayName,phoneNumber } = user;
          // dispatch(
          //   addUser({
          //     uid: uid,
          //     email: email,
          //     displayName:displayName,
          //     phoneNumber:phoneNumber,
          //   })
          // );
        })
        .catch((error) => {
          //when there is no such user found in firebase
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  

  return (
    <>
      <div className="bg-bgBody bg-cover bg-no-repeat bg-fixed bg-center">
        <Header />
        <div className="flex flex-row items-center justify-center">
          {/* login form */}
          <form className="bg-black py-10 px-5 h-full w-[25%] mb-5 flex flex-col gap-5 rounded-md bg-opacity-70">
            <p className="text-white text-4xl mb-4">
              {signIn ? "Sign In" : "Sign Up"}
            </p>
            {!signIn ? (
              <input
                type="text"
                ref={userName}
                placeholder="Full name"
                className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
              />
            ) : null}
            {!signIn ? (
              <input
                type="number"
                ref={phoneNumber}
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
            {errorMsg ? (
              <p className="text-red-400 text-xl font-semibold">{errorMsg}</p>
            ) : null}
            <button
              onClick={(e) => SignInSignUpLogic(e)}
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
                    onClick={handleSignUpSignInButton}
                    className="text-red-400 cursor-pointer"
                  >
                    Sign Up !
                  </span>
                </span>
              ) : (
                <span>
                  Already a User ?{" "}
                  <span
                    onClick={handleSignUpSignInButton}
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
