import React from "react";
import Body from "./components/Body";
import reduxStore from "./utilities/reduxStore";
import {Provider} from  "react-redux"

const App = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <div className="">
          <Body />
        </div>
      </Provider>
    </>
  );
};

export default App;
