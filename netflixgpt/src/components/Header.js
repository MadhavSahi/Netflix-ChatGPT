import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import netflixlogo03 from "../images/netflixgptLogo03.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //this is being triggered from LoginPage.js ->signInWithEmailAndPassword method on sign in or createUserWithEmailAndPassword on sign up....don't get confused...that's why on click of valid sign up or sign in this method is triggered bcz we have done subscription to auth change...so on valid sign in or signup this method will be called up automagically. It will trigger on every signup, signin and signout.

    // onAuthStateChanged is an observer that listens for changes in the user's authentication state, but it doesn't have a direct mechanism to sign a user in or out. It's used for responding to sign-in and sign-out events and keeping your application's UI and data in sync with the user's authentication state.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, phoneNumber } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            phoneNumber: phoneNumber,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out...after the SignOut API.
        dispatch(removeUser());

        //redirect the user to "/" page after signout
        navigate("/");
      }
      return () => {
        unsubscribe();
      };
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* <div className="px-10 py-2"> */}
      <div className="px-10 py-4 md:py-2 flex flex-row justify-center md:justify-start">
        {/* <p className="w-52 text-red-700 bg-gradient-to-l md:bg-gradient-to-t from-black h-20">
          Netflix GPT
        </p> */}
        <img
          className="w-52 bg-gradient-to-l md:bg-gradient-to-r from-black h-28 md:h-32"
          // className="w-52 bg-opacity-50 md:bg-gradient-to-t from-black h-20"
          // src={logo}
          src={netflixlogo03}
          // src={netflixLogo}
          alt="Netflix Logo"
        />
      </div>
    </>
  );
};

export default Header;
