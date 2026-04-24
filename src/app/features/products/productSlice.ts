// features/products/productsSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/models";

type ProductsState = {
  entities: Record<string, Product>;
  ids: string[];
};

const initialState: ProductsState = {
  entities: {},
  ids: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.entities = {};
      state.ids = [];

      action.payload.forEach((product) => {
        state.entities[product.id] = product;
        state.ids.push(product.id);
      });
    },

    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (!state.entities[product.id]) {
        state.entities[product.id] = product;
        state.ids.push(product.id);
      }
    },

    updateProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (state.entities[product.id]) {
        state.entities[product.id] = product;
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      delete state.entities[action.payload];
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, updateProduct, removeProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
