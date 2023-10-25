import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import Error from "./Error";

const Body = () => {
  const dispatch = useDispatch();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/error",
      element:<Error/>
    }
  ]);
  useEffect(() => {

    //this is being triggered from LoginPage.js ->signInWithEmailAndPassword method on sign in or createUserWithEmailAndPassword on sign up....don't get confused...that's why on click of valid sign up or sign in this method is triggered bcz we have done subscription to auth change...so on valid sign in or signup this method will be called up automagically. It will ttigger on every signup, signin and signout.
    
    // That's correct. onAuthStateChanged is an observer that listens for changes in the user's authentication state, but it doesn't have a direct mechanism to sign a user in or out. It's used for responding to sign-in and sign-out events and keeping your application's UI and data in sync with the user's authentication state.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // const { uid, email,displayName,phoneNumber } = user;
        // dispatch(
        //   addUser({
        //     uid: uid,
        //     email: email,
        //     displayName:displayName,
        //     phoneNumber:phoneNumber,
        //   })
        // );
      } else {
        // User is signed out...after the SignOut API.
        dispatch(removeUser());
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Body;
