// app/tasks/page.tsx
import { db } from '@/lib/db';
import Actions from './components/Actions';
import TaskFormModal from './components/TaskFormModal';

export default async function TasksPage() {
  const tasks = await db.task.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        {/* <AppButton variant="primary" href="/tasks/create-task">
          Create Task
        </AppButton> */}
        <TaskFormModal triggerLabel="Create Task" />
      </div>

      <div className="rounded-xl border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Created</th>
              <th className="text-right p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-3">{t.title}</td>
                <td className="p-3">
                  {t.done ? (
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs">
                      ✓ Done
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs">
                      • Open
                    </span>
                  )}
                </td>
                <td className="p-3">{new Date(t.createdAt).toLocaleString()}</td>
                <td className="p-3 text-right">
                  <Actions id={t.id} done={t.done} />
                </td>
              </tr>
            ))}
            {tasks.length === 0 && (
              <tr>
                <td className="p-6 text-sm text-slate-500" colSpan={4}>
                  No tasks yet — add your first one above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
