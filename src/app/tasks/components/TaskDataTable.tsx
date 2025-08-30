import DataTable from './DataTable';
import { columns } from './TaskColumnsDef';
import TaskFormModal from './TaskFormModal';

export default function TaskDataTable({ data }: { data: any }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      headerContent={<TaskFormModal triggerLabel="Create Task" />}
    />
  );
}
