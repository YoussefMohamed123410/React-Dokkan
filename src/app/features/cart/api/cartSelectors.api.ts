import type { RootState } from "@/app/store";
import type { CartItem } from "@/types/models";
import { createSelector } from "@reduxjs/toolkit";
import { selectProductEntities } from "@/app/features/products/productsSelectors";
import { CART_CONSTANTS } from "../cartConstants";

// 🔹 raw cart items
export const selectCartItems = (state: RootState) => state.carts.items;

// 🔹 count items (unique products)
export const selectCartItemsCount = (state: RootState) =>
  state.carts.items.length;

// 🔹 total quantity
export const selectCartCount = (state: RootState) =>
  state.carts.items.reduce((total, item) => total + item.quantity, 0);

// 🔹 check if product exists
export const selectIsInCart = (productId: string) => (state: RootState) =>
  state.carts.items.some((item) => item.productId === productId);

// 🔹 quantity of a product
export const selectProductQty = (productId: string) => (state: RootState) =>
  state.carts.items.find((item) => item.productId === productId)?.quantity || 0;

// 🔹 cart total (simple)
export const selectCartTotal = createSelector(
  [selectCartItems, selectProductEntities],
  (items, productEntities) =>
    items.reduce((total, item) => {
      const product = productEntities[item.productId];
      return total + (product?.price || 0) * item.quantity;
    }, 0),
);

// 🔹 group by store
export type GroupedCart = Record<string, CartItem[]>;

export const groupCartByStore = (
  items: CartItem[],
  productEntities: Record<string, { storeId?: string }> = {},
): GroupedCart => {
  return items.reduce((acc, item) => {
    const storeId = productEntities[item.productId]?.storeId || "unknown";

    if (!acc[storeId]) acc[storeId] = [];

    acc[storeId].push(item);
    return acc;
  }, {} as GroupedCart);
};

export const selectCartGroupedByStore = createSelector(
  [selectCartItems, selectProductEntities],
  (items, productEntities) => groupCartByStore(items, productEntities),
);

// 🔹 store totals (shipping + tax)
export const selectStoreTotals = createSelector(
  [selectCartItems, selectProductEntities],
  (items, productEntities) => {
    const storeTotals: Record<
      string,
      {
        subtotal: number;
        shipping: number;
        tax: number;
        total: number;
      }
    > = {};

    items.forEach((item) => {
      const product = productEntities[item.productId];
      if (!product) return;

      const storeId = product.storeId || "unknown";

      if (!storeTotals[storeId]) {
        storeTotals[storeId] = {
          subtotal: 0,
          shipping: 0,
          tax: 0,
          total: 0,
        };
      }

      storeTotals[storeId].subtotal += (product.price || 0) * item.quantity;
    });

    Object.values(storeTotals).forEach((totals) => {
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

// 🔹 grand totals
export const selectCartTotals = createSelector(
  [selectStoreTotals],
  (storeTotals) =>
    Object.values(storeTotals).reduce(
      (acc, t) => ({
        subtotal: acc.subtotal + t.subtotal,
        shipping: acc.shipping + t.shipping,
        tax: acc.tax + t.tax,
        total: acc.total + t.total,
      }),
      { subtotal: 0, shipping: 0, tax: 0, total: 0 },
    ),
);
