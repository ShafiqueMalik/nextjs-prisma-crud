'use client';
import { AppButton } from '@/shared/components/forms/AppButton';
import { useTransition } from 'react';
import { deleteTaskAction } from '../actions';

function DeleteBtn({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteTaskAction(id); // 👈 call server action directly
      } catch (err: any) {
        console.error(err);
        throw err;
      }
    });
  };
  return (
    <AppButton variant="destructive" type="button" onClick={handleDelete} disabled={isPending}>
      {isPending ? 'Deleting...' : 'Delete'}
    </AppButton>
  );
}
export default DeleteBtn;
