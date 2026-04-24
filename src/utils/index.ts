/**
 * Utility functions and helpers
 * Import utils from here: import { formatDate, classNames } from '@/utils'
 */

import { mockFavoriteProducts } from "@/Data";
import { mockCartItems } from "@/Data/mockData";
import type { Product } from "@/types";

/**
 * Combine class names conditionally
 */
export const classNames = (
  ...classes: (string | undefined | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/* =========================
   ADD TO FavORITES (CART)
========================= */
export const addToFavorite = (product: Product) => {
  const existingItem = mockFavoriteProducts.find(
    (item) => item.id === product.id,
  );

  if (existingItem) {
    return;
  }
  mockFavoriteProducts.push(product);
};

/* =========================
   REMOVE FROM FAVORITES
========================= */
export const removeFromFavorite = (productId: string) => {
  const index = mockFavoriteProducts.findIndex((item) => item.id === productId);

  if (index !== -1) {
    mockFavoriteProducts.splice(index, 1);
  }
};

/* =========================
   CHECK IF IN FAVORITES
========================= */
export const isInFavorite = (productId: string) => {
  return mockFavoriteProducts.some((item) => item.id === productId);
};

/* =========================

    TOGGLE FAVORITE 
========================= */

export const toggleFavoriteItem = (product: Product) => {
  const existingItem = mockFavoriteProducts.find(
    (item) => item.id === product.id,
  );

  if (existingItem) {
    removeFromFavorite(product.id);
    return;
  }
  addToFavorite(product);
};

/* =========================
   GET FAVORITE COUNT
========================= */
export const getFavoriteCount = () => {
  return mockFavoriteProducts.length;
};

//////////////////////////////////////// /* =========================
/*
   CART UTILITIES
========================= */

/* =========================
   ADD TO CART
========================= */
export const addToCart = (product: Product) => {
  const existingItem = mockCartItems.find(
    (item) => item.productId === product.id,
  );

  if (existingItem) {
    existingItem.quantity += 1;
    return;
  }

  mockCartItems.push({
    id: crypto.randomUUID(),
    cartId: "cart_1",
    productId: product.id,
    quantity: 1,
  });
};

export const toggleCartItem = (product: Product) => {
  const existingItem = mockCartItems.find(
    (item) => item.productId === product.id,
  );

  if (existingItem) {
    decreaseQuantity(product.id);
    return;
  }
  addToCart(product);
};

/* =========================
   REMOVE FROM CART (completely)
========================= */
export const removeFromCart = (productId: string) => {
  const index = mockCartItems.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    mockCartItems.splice(index, 1);
  }
};

/* =========================
   DECREASE QUANTITY
========================= */
export const decreaseQuantity = (productId: string) => {
  const item = mockCartItems.find((i) => i.productId === productId);

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  }
};

/* =========================
   GET CART TOTAL ITEMS
========================= */
export const getCartCount = () => {
  return mockCartItems.reduce((acc, item) => acc + item.quantity, 0);
};

/* =========================
   CHECK IF IN CART
========================= */
export const isInCart = (productId: string) => {
  return mockCartItems.some((item) => item.productId === productId);
};
