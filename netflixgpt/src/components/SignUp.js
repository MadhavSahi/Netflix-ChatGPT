import React from "react";

const SignUp = () => {
  return (
    <>
      <form className="bg-black py-10 px-5 flex flex-col gap-5 rounded-md bg-opacity-70">
        <p className="text-white text-4xl mb-4">Sign In</p>
        <input
          type="text"
          placeholder="Email"
          className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
        />
        {/* <br></br> */}
        <input
          type="password"
          placeholder="Password"
          className="text-white placeholder:text-white p-2 mb-4 bg-gray-500 px-5 rounded-md"
        />
        <button className="font-semibold bg-red-800 border-red-800 text-white rounded-md p-2">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
