import { useState } from 'react';
import { userService } from '@/services/user.service';
import { useUserStore } from '@/store/userStore';

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useUserStore();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { user, token } = await userService.login(email, password);
      setUser(user);
      // Store token in localStorage or cookie
      localStorage.setItem('token', token);
      return user;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
};
