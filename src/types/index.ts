/**
 * Central export file for all TypeScript types and interfaces
 * Import types from here: import { User, ApiResponse } from '@/types'
 */

export * from "./models";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}
export interface IProductListDropdown {
  name: string;
  link: string;
}
