/**
 * Application configuration
 */

export const config = {
  isDevelopment: import.meta.env.MODE === "development",
  isProduction: import.meta.env.MODE === "production",
  apiTimeout: 30000,
} as const;
