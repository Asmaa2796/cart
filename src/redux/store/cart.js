import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productID, quantity } = action.payload;
      // check if product is exist
      const checkIfExist = state.items.findIndex(
        (item) => item.productID === productID
      );
      if (checkIfExist >= 0) {
        state.items[checkIfExist].quantity += quantity;
      } else {
        state.items.push({productID, quantity});
      }
      localStorage.setItem("cart",JSON.stringify(state.items));
    },
    changeQty(state,action) {
      const { productID, quantity } = action.payload;
      const checkIfExist = state.items.findIndex(
        (item) => item.productID === productID
      );
      if(quantity > 0) {
        state.items[checkIfExist].quantity = quantity;
      } else {
        state.items = (state.items).filter((item) => item.productID !== productID);
      }
      localStorage.setItem("cart",JSON.stringify(state.items));
    }
  },
});
export const { addToCart , changeQty} = cartSlice.actions;
export default cartSlice.reducer;