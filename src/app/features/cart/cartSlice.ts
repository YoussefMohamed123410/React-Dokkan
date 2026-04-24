import { mockCartItems } from "@/Data";
import type { CartItem, Product } from "@/types/models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: mockCartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find(
        (i) => i.productId === action.payload.id,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: crypto.randomUUID(),
          productId: action.payload.id,
          quantity: 1,
          cartId: "",
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.productId !== action.payload);
    },

    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.productId === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.productId === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (i) => i.productId !== action.payload,
          );
        } else {
          item.quantity -= 1;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
