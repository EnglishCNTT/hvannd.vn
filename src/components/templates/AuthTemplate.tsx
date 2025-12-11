import React from 'react';

interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="w-full max-w-md space-y-8">
        {title && (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
