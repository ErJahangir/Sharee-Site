import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("products");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error("Could not load from localStorage", error);
    return [];
  }
};

// Save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("products", serializedState);
  } catch (error) {
    console.error("Could not save to localStorage", error);
  }
};

// Initial state with loaded products from localStorage
const initialState = {
  products: loadFromLocalStorage(), // Load products from localStorage
};

// Create the slice
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.Quantity += 1;
        existingProduct.totalPrice += action.payload.price; // Update total price
      } else {
        state.products.push({
          ...action.payload,
          Quantity: 1,
          totalPrice: action.payload.price,
        });
      }

      // Save updated state to localStorage
      saveToLocalStorage(state.products);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      // Save updated state to localStorage
      saveToLocalStorage(state.products);
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.Quantity += 1;
        product.totalPrice += product.price; // Correctly add the unit price to total price
      }

      // Save updated state to localStorage
      saveToLocalStorage(state.products);
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product && product.Quantity > 1) {
        product.Quantity -= 1;
        product.totalPrice -= product.price; // Correctly subtract the unit price from total price
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }

      // Save updated state to localStorage
      saveToLocalStorage(state.products);
    },
  },
});

// Export the actions
export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  ProductSlice.actions;

// Export the reducer
export default ProductSlice.reducer;
