import React from "react";
// import Header from "./Header";
import UserIcon from "../images/Netflix-avatar.png";
import logo from "../images/Netflix_Logo.png";
import { auth } from "../utilities/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate=useNavigate();
  const userSelector=useSelector(store=>store?.user);
  const handleSignOutBtn=()=>{

    //this firebase API is used to signout the user and the onAuthStateChanged() will get triggered aftrwards this method
    signOut(auth).then(() => {
      navigate("/");
      //we have to do it here bcz we can;t do navigate in Body.js as it has the parent router navigations...
      // the way to handle signout is in onAuthStateChanged in Body.js

      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
      // An error happened.
    });
  };
  return (
    <>
      <div className="flex flex-row justify-between px-4 bg-gradient-to-t from-black">
        <img
          className="w-52 h-28"
          src={logo}
          alt="Netflix Logo"
        />
        {userSelector?.displayName && <p className="text-black text-4xl py-8 font-semibold">Welcome, Mr. {userSelector?.displayName}</p>}
        <div className="flex flex-row my-5 gap-2">
          <img className="w-20 h-16" src={UserIcon} alt="logo-user" />
          <button onClick={handleSignOutBtn} className="bg-red-500 w-20 h-12 text-white mt-2 hover:scale-90 font-bold">Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Browse;
