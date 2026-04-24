import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/models";
import { mockFavoriteProducts } from "@/Data";

export interface FavoriteState {
  items: Product[];
}

const initialState: FavoriteState = {
  items: mockFavoriteProducts, // Start with mock data for testing
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.items.push(action.payload);
      }
    },

    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToFavorite,
  removeFromFavorite,
  toggleFavorite,
  clearFavorites,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
