'use client';

import { Edit } from 'lucide-react';
import DeleteBtn from './DeleteBtn';

import StatusMenu from './StatusMenu';
import TaskFormModal from './TaskFormModal';
import { AppButton } from '@/shared/components/forms/AppButton';
export type Task = {
  id: number;
  title: string;
  description?: string;
  status: string;
  done: boolean;
  createdAt: Date;
};
export const columns = [
  {
    accessorKey: 'title',
    header: 'Title',
    size: 200,
    enableSorting: true,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 280,
    enableSorting: true,
  },
  {
    accessorKey: 'status',
    header: 'status',
    size: 80, // fixed width
    enableSorting: true,
    cell: ({ row }) => {
      const task = row.original;
      return <StatusMenu id={task.id} status={task.status} />;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    size: 50,
    cell: ({ row }) => {
      const task = row.original;
      return (
        <div className="flex items-center gap-2  ">
          <TaskFormModal
            triggerLabel={
              <AppButton variant="secondary">
                <Edit />
              </AppButton>
            }
            defaultValues={task}
          />
          <DeleteBtn id={task.id} />
        </div>
      );
    },
  },
];
