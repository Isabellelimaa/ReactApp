import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Scenes/Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Configs/ConfigureStore";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
