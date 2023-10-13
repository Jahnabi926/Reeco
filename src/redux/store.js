import { configureStore } from "@reduxjs/toolkit";
import productTableReducer from "./reducer";

export default configureStore({
  reducer: {
    productTable: productTableReducer,
  },
});
