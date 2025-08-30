// app/tasks/page.tsx
import { db } from '@/lib/db';
import TaskDataTable from './components/TaskDataTable';

export default async function TasksPage() {
  const tasks = await db.task.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
      </div>

      <div className="rounded-xl overflow-x-auto">
        <TaskDataTable data={tasks || []} />
      </div>
    </div>
  );
}
