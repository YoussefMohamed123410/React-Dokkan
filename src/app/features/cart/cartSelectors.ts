// // features/cart/cartSelectors.ts
// import { type RootState } from "@/app/store";
// import type { CartItem } from "@/types/models";
// import type { Product } from "@/types/models";
// import { createSelector } from "@reduxjs/toolkit";
// import { selectProductEntities } from "@/app/features/products/productsSelectors";
// import { CART_CONSTANTS } from "./cartConstants";

// export const selectCartItems = (state: RootState) => state.cart.items;

// export const selectCartItemsCount = (state: RootState) =>
//   state.cart.items.length > 0 ? state.cart.items.length : 0;

// export const selectCartCount = (state: RootState) =>
//   state.cart.items.reduce((total, item) => total + item.quantity, 0);

// export const selectIsInCart = (productId: string) => (state: RootState) =>
//   state.cart.items.some((item) => item.productId === productId);

// export const selectProductQty = (productId: string) => (state: RootState) =>
//   state.cart.items.find((item) => item.productId === productId)?.quantity || 0;

// export const selectCartTotal = (state: RootState) =>
//   state.cart.items.reduce((total, item) => {
//     const product: Product | undefined =
//       selectProductEntities(state)[item.productId];
//     console.log("product: ", product);
//     return total + (product?.price || 0) * item.quantity;
//   }, 0);

// type GroupedCart = Record<string, CartItem[]>;

// export const groupCartByStore = (
//   items: CartItem[],
//   productEntities: ReturnType<typeof selectProductEntities> = {},
// ): GroupedCart => {
//   return items.reduce((acc, item) => {
//     const storeId = productEntities[item.productId]?.storeId || "unknown";

//     if (!acc[storeId]) {
//       acc[storeId] = [];
//     }

//     acc[storeId].push(item);
//     return acc;
//   }, {} as GroupedCart);
// };

// export const selectCartGroupedByStore = createSelector(
//   [selectCartItems, selectProductEntities],
//   (items, productEntities) => groupCartByStore(items, productEntities),
// );

// /**
//  * Calculate store totals including shipping and tax
//  */
// export const selectStoreTotals = createSelector(
//   [selectCartItems, selectProductEntities],
//   (items, productEntities) => {
//     const storeTotals: Record<
//       string,
//       {
//         subtotal: number;
//         shipping: number;
//         tax: number;
//         total: number;
//       }
//     > = {};

//     items.forEach((item) => {
//       const product = productEntities[item.productId];
//       if (!product) return;

//       const storeId = product.storeId || "unknown";
//       if (!storeTotals[storeId]) {
//         storeTotals[storeId] = { subtotal: 0, shipping: 0, tax: 0, total: 0 };
//       }

//       storeTotals[storeId].subtotal += (product.price || 0) * item.quantity;
//     });

//     // Calculate shipping and tax for each store
//     Object.entries(storeTotals).forEach(([, totals]) => {
//       totals.shipping =
//         totals.subtotal >= CART_CONSTANTS.FREE_SHIPPING_THRESHOLD
//           ? 0
//           : CART_CONSTANTS.SHIPPING_COST;
//       totals.tax = totals.subtotal * CART_CONSTANTS.TAX_RATE;
//       totals.total = totals.subtotal + totals.shipping + totals.tax;
//     });

//     return storeTotals;
//   },
// );

// /**
//  * Calculate overall cart totals
//  */
// export const selectCartTotals = createSelector(
//   [selectStoreTotals],
//   (storeTotals) => {
//     return Object.values(storeTotals).reduce(
//       (acc, totals) => ({
//         subtotal: acc.subtotal + totals.subtotal,
//         shipping: acc.shipping + totals.shipping,
//         tax: acc.tax + totals.tax,
//         total: acc.total + totals.total,
//       }),
//       { subtotal: 0, shipping: 0, tax: 0, total: 0 },
//     );
//   },
// );

import { type RootState } from "@/app/store";
import type { CartItem } from "@/types/models";
import { createSelector } from "@reduxjs/toolkit";
import { selectProductEntities } from "@/app/features/products/productsSelectors";
import { CART_CONSTANTS } from "./cartConstants";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length > 0 ? state.cart.items.length : 0;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectIsInCart = (productId: string) => (state: RootState) =>
  state.cart.items.some((item) => item.productId === productId);

export const selectProductQty = (productId: string) => (state: RootState) =>
  state.cart.items.find((item) => item.productId === productId)?.quantity || 0;

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => {
    const product = state.product.entities[item.productId];
    console.log("12132" + product);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

type GroupedCart = Record<string, CartItem[]>;

export const groupCartByStore = (
  items: CartItem[],
  productEntities: ReturnType<typeof selectProductEntities> = {},
): GroupedCart => {
  return items.reduce((acc, item) => {
    const storeId = productEntities[item.productId]?.storeId || "unknown";
    if (!acc[storeId]) {
      acc[storeId] = [];
    }
    acc[storeId].push(item);
    return acc;
  }, {} as GroupedCart);
};

export const selectCartGroupedByStore = createSelector(
  [selectCartItems, selectProductEntities],
  (items, productEntities) => groupCartByStore(items, productEntities),
);

/**
 *  * Calculate store totals including shipping and tax
 **/

export const selectStoreTotals = createSelector(
  [selectCartItems, selectProductEntities],
  (items, productEntities) => {
    const storeTotals: Record<
      string,
      { subtotal: number; shipping: number; tax: number; total: number }
    > = {};

    items.forEach((item) => {
      const product = productEntities[item.productId];
      if (!product) return;
      const storeId = product.storeId || "unknown";
      console.log("storeId: " + storeId);
      if (!storeTotals[storeId]) {
        storeTotals[storeId] = { subtotal: 0, shipping: 0, tax: 0, total: 0 };
      }
      storeTotals[storeId].subtotal += (product.price || 0) * item.quantity;
    });

    // Calculate shipping and tax for each store

    Object.entries(storeTotals).forEach(([, totals]) => {
      totals.shipping =
        totals.subtotal >= CART_CONSTANTS.FREE_SHIPPING_THRESHOLD
          ? 0
          : CART_CONSTANTS.SHIPPING_COST;
      totals.tax = totals.subtotal * CART_CONSTANTS.TAX_RATE;
      totals.total = totals.subtotal + totals.shipping + totals.tax;
    });
    return storeTotals;
  },
);

/**
 * * Calculate overall cart totals
 * */
export const selectCartTotals = createSelector(
  [selectStoreTotals],
  (storeTotals) => {
    return Object.values(storeTotals).reduce(
      (acc, totals) => ({
        subtotal: acc.subtotal + totals.subtotal,
        shipping: acc.shipping + totals.shipping,
        tax: acc.tax + totals.tax,
        total: acc.total + totals.total,
      }),
      { subtotal: 0, shipping: 0, tax: 0, total: 0 },
    );
  },
);
