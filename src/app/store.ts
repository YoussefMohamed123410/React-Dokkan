// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";
import favoriteReducer from "./features/favorites/favoritesSlice";
import storeReducer from "./features/store/storeSlice";
import { api } from "./api";
import productsReducer from "./features/products/api/productsSlice.api";
import cartsReducer from "./features/cart/api/cartSlice.api";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    product: productReducer,
    store: storeReducer,
    products: productsReducer,
    carts: cartsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
