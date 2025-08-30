'use client';
import { AppButton } from '@/shared/components/forms/AppButton';
import { useFormStatus } from 'react-dom';

function DeleteBtn() {
  const { pending } = useFormStatus();

  return (
    <AppButton variant="destructive" type="submit" disabled={pending}>
      {pending ? 'Deleting...' : 'Delete'}
    </AppButton>
  );
}
export default DeleteBtn;
