// // features/cart/cartSlice.ts
// import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "@/app/store";
// import { cartApi } from ".";
// import type { CartItem } from "@/types";

// type CartState = {
//   items: CartItem[];
// };

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       cartApi.endpoints.getCart.matchFulfilled,
//       (state, action) => {
//         state.items = action.payload.items;
//       },
//     );
//   },
// });

// export const { clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

// // 🔹 Selector
// export const selectCartItems = (state: RootState) => state.cart.items;
