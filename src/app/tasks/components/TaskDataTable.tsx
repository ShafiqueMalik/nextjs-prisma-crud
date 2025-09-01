'use client';
import { useState } from 'react';
import DataTable from './DataTable';
import StatusFilter from './StatusFilter';
import { columns } from './TaskColumnsDef';
import TaskFormModal from './TaskFormModal';
import { PriorityType, StatusesType } from '@/shared/types/models';
import PriorityFilter from './PriorityFilter';

export default function TaskDataTable({ tasks }: { tasks: any[] }) {
  const [currentStatus, setCurrentStatus] = useState<StatusesType | ''>('');
  const [priorityStatus, setPriorityStatus] = useState<PriorityType | ''>('');
  // Compute filtered tasks
  const filteredTasks = tasks?.filter((task) => {
    const matchesStatus = currentStatus ? task.status === currentStatus : true;
    const matchesPriority = priorityStatus ? task.priority === priorityStatus : true;
    return matchesStatus && matchesPriority;
  });
  return (
    <DataTable
      columns={columns}
      data={filteredTasks}
      headerContent={
        <div className="flex gap-2 items-center">
          <PriorityFilter
            onPriorityChange={(priority: PriorityType) => setPriorityStatus(priority)}
          />
          <StatusFilter onStatusChange={(status: StatusesType) => setCurrentStatus(status)} />
          <TaskFormModal triggerLabel="Create Task" />
        </div>
      }
    />
  );
}
