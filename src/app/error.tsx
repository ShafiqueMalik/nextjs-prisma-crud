'use client';

import { AppButton } from '@/shared/components/forms/AppButton';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('❌ Error boundary:', error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-92px)]  px-4">
      <h2 className="text-3xl font-semibold text-primary mb-4">
        {error?.message || 'Something went wrong'}
      </h2>
      <p className=" mb-6 text-center max-w-md">
        We&#39;re sorry! An unexpected error occurred. Please try again or contact support if the
        issue persists.
      </p>

      <AppButton variant="primary" onClick={reset}>
        Try Again
      </AppButton>
    </div>
  );
}
