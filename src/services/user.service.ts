import { userRepository } from '@/repositories/user.repository';
import { User } from '@/models/user.model';

export const userService = {
  getUserProfile: async (id: string): Promise<User> => {
    // Business logic can be added here (e.g., data transformation, validation)
    const user = await userRepository.getById(id);
    return {
      ...user,
      name: user.name.toUpperCase(), // Example transformation
    };
  },

  login: async (email: string, password: string) => {
    // Validation logic
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    return userRepository.login(email, password);
  },
};
