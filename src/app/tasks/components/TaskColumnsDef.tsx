'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
export type Task = {
  id: number;
  title: string;
  description?: string;
  done: boolean;
  createdAt: Date;
};
export const columns = (
  toggleDone: (id: number) => void,
  deleteTask: (id: number) => void
): ColumnDef<Task>[] => [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'done',
    header: 'Done',
    cell: ({ row }) => {
      const task = row.original;
      return <Checkbox checked={task.done} onCheckedChange={() => toggleDone(task.id)} />;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const task = row.original;
      return (
        <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      );
    },
  },
];
