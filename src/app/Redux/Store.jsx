import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice"; // Importing the product slice

// Configure the store
export const store = configureStore({
  reducer: {
    product: productSlice, // Assign productSlice to the 'product' key in the store
  },
});
