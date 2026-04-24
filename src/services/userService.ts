/**
 * User service - handles user-related API calls
 */

import { apiService } from "./apiService";
import type { User } from "@/types";

export const userService = {
  async getUsers(): Promise<User[]> {
    return apiService.get<User[]>("/api/users");
  },

  async getUser(id: string): Promise<User> {
    return apiService.get<User>(`/api/users/${id}`);
  },

  async createUser(user: Omit<User, "id">): Promise<User> {
    return apiService.post<User>("/api/users", user);
  },
};
