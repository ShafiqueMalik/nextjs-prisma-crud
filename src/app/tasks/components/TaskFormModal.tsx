// TaskFormModal.tsx
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TaskForm from './TaskForm';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export default function TaskFormModal({
  triggerLabel = 'Add Task',
  defaultValues,
}: {
  triggerLabel: React.ReactNode;
  defaultValues?: any;
}) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setTimeout(() => setOpen(false), 10); // Small delay to avoid flicker
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {typeof triggerLabel === 'string' ? <Button>{triggerLabel}</Button> : triggerLabel}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <TaskForm onSuccess={handleSuccess} defaultValues={defaultValues} />
      </DialogContent>
    </Dialog>
  );
}
