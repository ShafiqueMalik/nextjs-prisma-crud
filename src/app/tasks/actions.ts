// app/tasks/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  done: z.boolean(),
});

export async function createTask(values: unknown) {
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

export async function deleteTaskAction(formData: FormData) {
  const id = Number(formData.get('id')); // get hidden input value

  if (!id) {
    throw new Error('Invalid task input');
  }

  await db.task.delete({
    where: { id },
  });

  // refresh tasks list after creating
  revalidatePath('/tasks');
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
