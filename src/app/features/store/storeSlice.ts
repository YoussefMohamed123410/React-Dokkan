import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Store } from "@/types/models";

type StoresState = {
  entities: Record<string, Store>;
  ids: string[];
};

const initialState: StoresState = {
  entities: {},
  ids: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStores: (state, action: PayloadAction<Store[]>) => {
      state.entities = {};
      state.ids = [];

      action.payload.forEach((store) => {
        state.entities[store.id] = store;
        state.ids.push(store.id);
      });
    },

    addStore: (state, action: PayloadAction<Store>) => {
      const store = action.payload;
      if (!state.entities[store.id]) {
        state.entities[store.id] = store;
        state.ids.push(store.id);
      }
    },

    updateStore: (state, action: PayloadAction<Store>) => {
      const store = action.payload;
      if (state.entities[store.id]) {
        state.entities[store.id] = store;
      }
    },

    removeStore: (state, action: PayloadAction<string>) => {
      delete state.entities[action.payload];
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { setStores, addStore, updateStore, removeStore } =
  storeSlice.actions;

export default storeSlice.reducer;
