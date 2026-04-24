import type { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectStoreState = (state: RootState) => state.store;

export const selectStoreEntities = (state: RootState) => state.store.entities;

export const selectStoreIds = (state: RootState) => state.store.ids;

export const selectAllStores = createSelector(
  [selectStoreEntities, selectStoreIds],
  (entities, ids) => ids.map((id) => entities[id]),
);

export const selectStoreById = (id: string) =>
  createSelector([selectStoreEntities], (entities) => entities[id]);
