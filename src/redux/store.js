// src/redux/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const contactsPersistConfig = {
  key: "contacts", // where in localStorage to store
  storage, // use localStorage
  whitelist: ["items"], // only save `items`, not the whole state object
};

const rootReducer = combineReducers({
  // all reducerrs
  contacts: persistReducer(contactsPersistConfig, contactsReducer), //use persistReducer for contacts; save to localStorage
  filters: filtersReducer, // no persist
});

// Step 3: Create the store with the combined reducer
const store = configureStore({
  reducer: rootReducer,
});

// Step 4: Create the persistor for PersistGate in index.js
export const persistor = persistStore(store);
export { store };
