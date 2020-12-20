import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import ReduxThunk from "redux-thunk";

import rootReducer from "../Redux";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [
    //
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(ReduxThunk)
);

export const persistor = persistStore(store);
