// selectors/favoriteSelectors.ts

import type { RootState } from "@/app/store";

export const selectFavoriteState = (state: RootState) => state.favorite;
export const selectFavoriteItems = (state: RootState) => state.favorite.items;

export const selectFavoriteCount = (state: RootState) =>
  state.favorite.items.length;

export const selectIsFavorite = (id: string) => (state: RootState) =>
  state.favorite.items.some((item) => item.id === id);

export const selectFavoriteById = (id: string) => (state: RootState) =>
  state.favorite.items.find((item) => item.id === id);
