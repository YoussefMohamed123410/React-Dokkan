/**
 * Application constants and configuration values
 * Import constants from here: import { API_BASE_URL, ROUTES } from '@/constants'
 */

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

// export const ROUTES = {
//   HOME: "/",
//   ABOUT: "/about",
//   CONTACT: "/contact",
//   REGISTER: "/register",
//   LOGIN: "/login",
//   PRODUCTS: "/products",
//   STORES: "/stores",

//   // Add more routes here
// } as const;

export const APP_NAME = "My Graduation Project";
export const APP_VERSION = "1.0.0";
