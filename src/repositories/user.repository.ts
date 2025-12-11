import axiosClient from '@/lib/axiosClient';
import { User } from '@/models/user.model';

export const userRepository = {
  getAll: async (): Promise<User[]> => {
    return axiosClient.get('/users');
  },

  getById: async (id: string): Promise<User> => {
    return axiosClient.get(`/users/${id}`);
  },

  // Mock login for demonstration
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    // In a real app, this would be an API call
    // return axiosClient.post('/auth/login', { email, password });
    
    // Mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            email: email,
            name: 'John Doe',
            role: 'user',
            createdAt: new Date().toISOString(),
          },
          token: 'mock-jwt-token',
        });
      }, 1000);
    });
  },
};
