import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={inputId}>{label}</Label>
        <Input id={inputId} ref={ref} {...props} />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
