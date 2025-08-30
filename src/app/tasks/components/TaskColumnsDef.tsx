'use client';

import DeleteBtn from './DeleteBtn';
import { deleteTaskAction, toggleDoneAction } from '../actions';
import ToggleDone from './ToggleDone';
export type Task = {
  id: number;
  title: string;
  description?: string;
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
    accessorKey: 'done',
    header: 'status',
    size: 80, // fixed width
    enableSorting: true,
    cell: ({ row }) => {
      const task = row.original;
      return <span className="">{task.done ? 'Done' : 'Open'}</span>;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    size: 120,
    cell: ({ row }) => {
      const task = row.original;
      return (
        <div className="flex items-center gap-2  ">
          <form action={toggleDoneAction}>
            <input type="hidden" name="id" value={task.id} />
            <input type="hidden" name="done" value={task.done.toString()} />
            <ToggleDone done={task.done} />
          </form>
          <form action={deleteTaskAction}>
            <input type="hidden" name="id" value={task.id} />
            <DeleteBtn />
          </form>
        </div>
      );
    },
  },
];
