// app/tasks/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { StatusesType } from '@/shared/types/models';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.enum(['TODO', 'INPROGRESS', 'DONE']),
});

export async function createTaskAction(values: unknown) {
  // validate on server too
  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    throw new Error('Invalid task input');
  }

  const task = await db.task.create({
    data: parsed.data,
  });

  // refresh tasks list after creating
  revalidatePath('/tasks');
  return task;
}

export async function deleteTaskAction(id: number) {
  if (!id) {
    throw new Error('Invalid task input');
  }

  const response = await db.task.delete({
    where: { id },
  });

  // refresh tasks list after creating
  revalidatePath('/tasks');
  return response;
}

export async function toggleDoneAction(formData: FormData) {
  const id = Number(formData.get('id')); // get hidden input value
  const done = formData.get('done') === 'true'; // get hidden input value
  if (!id) {
    throw new Error('Invalid task input');
  }

  await db.task.update({
    where: { id },
    data: {
      done: !done,
    },
  });

  // refresh tasks list after creating
  revalidatePath('/tasks');
}

export async function updateStatusAction(status: StatusesType, id: number) {
  if (!status) {
    throw new Error('Invalid status value');
  }

  await db.task.update({
    where: { id },
    data: {
      status: status,
    },
  });

  // refresh tasks list after creating
  revalidatePath('/tasks');
}

export async function updateTaskAction(data: any, id: number) {
  if (!data) {
    throw new Error('Invalid status value');
  }

  await db.task.update({
    where: { id },
    data: data,
  });

  // refresh tasks list after creating
  revalidatePath('/tasks');
}

export async function getTasksByStatus(status: StatusesType) {
  const tasks = await db.task.findMany({ where: { status }, orderBy: { createdAt: 'desc' } });
  console.log('sssssssss', tasks);
  return tasks;
}
