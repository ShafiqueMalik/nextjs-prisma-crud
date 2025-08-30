'use client';
import { AppButton } from '@/shared/components/forms/AppButton';
import { useFormStatus } from 'react-dom';

function ToggleDone({ done }: { done: boolean }) {
  const { pending } = useFormStatus();

  return (
    <AppButton type="submit" disabled={pending}>
      {pending ? 'Updating...' : done ? 'Mark Open' : 'Mark Done'}
    </AppButton>
  );
}

export default ToggleDone;
