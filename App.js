import { useState, useEffect, useRef } from "react";
import { Provider } from "react-redux";

import Routes from "Routes";
import { store } from "Store";

import { styles } from "Styles";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
