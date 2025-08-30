import { twMerge } from 'tailwind-merge';

interface LoadingSpinnerProps {
  className?: string;
  spinnerClassName?: string;
  text?: string;
  textClassName?: string;
}

export function LoadingSpinner({ className = '', spinnerClassName = '' }: LoadingSpinnerProps) {
  return (
    <div className={twMerge('flex flex-col items-center space-y-4', className)}>
      <div
        className={twMerge(
          'h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary',
          spinnerClassName
        )}
      />
    </div>
  );
}
