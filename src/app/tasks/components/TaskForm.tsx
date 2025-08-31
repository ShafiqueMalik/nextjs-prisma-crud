// app/tasks/task-form.tsx
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';

import FormWrapper from '@/shared/components/forms/FormWrapper';
import InputField from '@/shared/components/forms/InputField';
import TextareaField from '@/shared/components/forms/TextareaField';
import { useTransition } from 'react';
import { createTaskAction, updateTaskAction } from '../actions';
import SelectField from '@/shared/components/forms/SelectField';
import { Prisma } from '@prisma/client';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function TaskForm({
  onSuccess,
  defaultValues,
}: {
  onSuccess: () => void;
  defaultValues: any;
}) {
  const [isPending, startTransition] = useTransition();
  console.log('defaultValues', defaultValues);
  const { title = '', description = '', status = 'TODO', id } = defaultValues || {};
  const form = useForm<FormValues>({
    resolver: zodResolver(schema) as any,
    defaultValues: { title, description, status },
  });

  function onSubmit(values: FormValues) {
    startTransition(async () => {
      try {
        if (id) {
          await updateTaskAction(values, id);
        } else {
          await createTaskAction(values); // 👈 call server action directly
        }
        onSuccess();
      } catch (error: any) {
        // First, let's see what the error actually looks like
        if (error?.message?.includes('Unique constraint failed')) {
          throw new Error('The task with this title already exist');
        }
        throw error;
      }
    });
  }
  return (
    <>
      <FormWrapper form={form} onSubmit={onSubmit}>
        <InputField control={form.control} name="title" label="Title" placeholder="e.g. Ship MVP" />

        <TextareaField
          control={form.control}
          name="description"
          label="Description"
          placeholder="Optional details..."
        />

        <SelectField
          control={form.control}
          name="status"
          label="Status"
          placeholder="Select Status"
          options={[
            { label: 'Todo', value: 'TODO' },
            { label: 'in Progress', value: 'INPROGRESS' },
            { label: 'Done', value: 'DONE' },
          ]}
        />
        {/* <CheckboxField control={form.control} name="done" label="Mark as done" /> */}
        <Button type="submit" className="w-full" disabled={isPending}>
          {id ? (
            <>{isPending ? 'Updating...' : 'Update Task'}</>
          ) : (
            <>{isPending ? 'Creating...' : 'Create Task'}</>
          )}
        </Button>
      </FormWrapper>
    </>
  );
}
