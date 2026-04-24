import type { RootState } from "@/app/store";
import type { Product } from "@/types/models";
import { createSelector } from "@reduxjs/toolkit";

export const selectProductsState = (state: RootState) => state.product;

export const selectProductEntities = (state: RootState) =>
  state.product.entities as Record<string, Product>;

export const selectProductIds = (state: RootState) => state.product.ids;

export const selectAllProducts = createSelector(
  // Get all products
  [selectProductEntities, selectProductIds],
  (entities, ids) => ids.map((id) => entities[id]),
);

export const selectProductsGroupedByStore = createSelector(
  // Group by store
  [selectAllProducts],
  (products) => {
    return products.reduce(
      (acc, product) => {
        const key = product.storeId;

        if (!acc[key]) acc[key] = [];
        acc[key].push(product);

        return acc;
      },
      {} as Record<string, Product[]>,
    );
  },
);

export const selectProductsByStore = (
  storeId: string, //  Get products for one store
) =>
  createSelector(
    [selectProductsGroupedByStore],
    (grouped) => grouped[storeId] || [],
  );

export const selectProductById = (
  id: string, // Get product by id
) => createSelector([selectProductEntities], (entities) => entities[id]);

export const selectProductsBySearch = (search: string) =>
  // Search selector
  createSelector([selectAllProducts], (products) =>
    products.filter(
      (p) => p.title.includes(search) || p.description?.includes(search),
    ),
  );

// Get storeId by productId
export const selectStoreIdByProductId = (productId: string) =>
  createSelector([selectProductEntities], (entities) => {
    // console.log("entities from productSelectors:", entities);
    console.log("productId:", productId);
    // console.log("entity keys:", Object.keys(entities));
    // console.log("entity Values:", Object.values(entities));
    // console.log("selected entity:", entities[productId]);
    console.log("storeId:", entities[productId]?.storeId);
    return entities[productId]?.storeId;
  });
