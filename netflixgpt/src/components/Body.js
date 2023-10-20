import React from "react";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import Browse from "./Browse";

const Body = () => {
    const routes=createBrowserRouter([
        {
            path:'/',
            element:<LoginPage/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
  return (
  <>
    <RouterProvider router={routes}/>
  </>
  );
};

export default Body;
