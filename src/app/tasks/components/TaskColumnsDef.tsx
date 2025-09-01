'use client';

import { Edit } from 'lucide-react';
import DeleteBtn from './DeleteBtn';

import StatusMenu from './StatusMenu';
import TaskFormModal from './TaskFormModal';
import { AppButton } from '@/shared/components/forms/AppButton';
import { cn } from '@/lib/utils';
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
    size: 122, // fixed width
    enableSorting: true,
    cell: ({ row }) => {
      const task = row.original;
      return <StatusMenu id={task.id} status={task.status} />;
    },
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    size: 70,
    enableSorting: true,
    cell: ({ row }) => {
      const task = row.original;
      return (
        <div
          className={cn(
            `bg-green-200 px-1 rounded-md text-xs flex justify-center items-center py-1 `,
            task.priority === 'MEDIUM' && 'bg-orange-200',
            task.priority === 'HIGH' && 'bg-red-200'
          )}
        >
          {task.priority}
        </div>
      );
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
