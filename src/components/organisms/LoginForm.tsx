'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components/molecules/TextField';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const { login, loading, error } = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password);
      router.push('/dashboard'); // Redirect after login
    } catch (e) {
      // Error is handled by the hook
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md p-6 border rounded-lg shadow-sm bg-card">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      
      {error && (
        <div className="p-3 bg-destructive/10 text-destructive rounded-md text-sm">
          {error}
        </div>
      )}

      <TextField
        label="Email"
        type="email"
        placeholder="name@example.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <TextField
        label="Password"
        type="password"
        placeholder="******"
        error={errors.password?.message}
        {...register('password')}
      />

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};
