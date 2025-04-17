// src/redux/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
  // all reducerrs
  contacts: contactsReducer, //use persistReducer for contacts; save to localStorage
  filters: filtersReducer, // no persist
});

// Step 3: Create the store with the combined reducer
export const store = configureStore({
  reducer: rootReducer,
});
