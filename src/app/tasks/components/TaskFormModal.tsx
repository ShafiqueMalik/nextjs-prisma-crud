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
import { useState } from 'react';

export default function TaskFormModal({ triggerLabel = 'Add Task' }) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <TaskForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
