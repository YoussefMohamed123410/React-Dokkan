// import { createSelector } from "@reduxjs/toolkit";
// import type { RootState } from "@/app/store";
// import type { Product } from "@/types/models";

// import { selectAllProducts, selectProductEntities } from "./productsSlice.api";

// // base (mock/adapter)
// export const selectProductsState = (state: RootState) => state.product;

// export const selectProductsGroupedByStore = createSelector(
//   [selectAllProducts],
//   (products) =>
//     products.reduce(
//       (acc, product) => {
//         const key = product.storeId;
//         (acc[key] ??= []).push(product);
//         return acc;
//       },
//       {} as Record<string, Product[]>,
//     ),
// );

// export const selectProductsByStore = (storeId: string) =>
//   createSelector(
//     [selectProductsGroupedByStore],
//     (grouped) => grouped[storeId] ?? [],
//   );

// export const selectProductById = (id: string) => (state: RootState) =>
//   selectProductEntities(state)[id];

// export const selectProductsBySearch = (search: string) =>
//   createSelector([selectAllProducts], (products) => {
//     const q = search.trim();
//     if (!q) return products;

//     return products.filter(
//       (p) => p.title.includes(q) || p.description?.includes(q),
//     );
//   });

// export const selectStoreIdByProductId = (productId: string) =>
//   createSelector(
//     [selectProductEntities],
//     (entities) => entities[productId]?.storeId,
//   );
