'use client';
import { AppButton } from '@/shared/components/forms/AppButton';
import { useState, useTransition } from 'react';
import { deleteTaskAction } from '../actions';
import { LoadingSpinner } from '@/shared/components/loadings/LoadingSpinner';
import { Trash } from 'lucide-react';
import ConfirmModal from '@/shared/components/modals/ConfirmModal';

function DeleteBtn({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteTaskAction(id); // 👈 call server action directly
        setOpen(false);
      } catch (err: any) {
        console.error(err);
        throw err;
      }
    });
  };
  return (
    <>
      <AppButton
        variant="destructive"
        className="w-[40px]"
        type="button"
        onClick={() => setOpen(true)}
        disabled={isPending}
      >
        <Trash />
      </AppButton>
      <ConfirmModal
        open={open}
        onOpenChange={setOpen}
        title="Delete Task"
        description="Are you sure you want to delete this task? This action cannot be undone."
        confirmLabel={isPending ? 'Deleting...' : 'Delete'}
        cancelLabel="Cancel"
        onConfirm={handleDelete}
        disabled={isPending}
      />
    </>
  );
}
export default DeleteBtn;
