'use client';
import { useState } from 'react';
import DataTable from './DataTable';
import StatusFilter from './StatusFilter';
import { columns } from './TaskColumnsDef';
import TaskFormModal from './TaskFormModal';
import { StatusesType } from '@/shared/types/models';

export default function TaskDataTable({ tasks }: { tasks: any[] }) {
  const [currentStatus, setCurrentStatus] = useState<StatusesType | ''>('');
  return (
    <DataTable
      columns={columns}
      data={currentStatus ? tasks?.filter((task) => task.status === currentStatus) : tasks}
      headerContent={
        <div className="flex gap-2 items-center">
          <StatusFilter onStatusChange={(status: StatusesType) => setCurrentStatus(status)} />
          <TaskFormModal triggerLabel="Create Task" />
        </div>
      }
    />
  );
}
