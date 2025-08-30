// app/tasks/task-form.tsx
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';

import FormWrapper from '@/shared/components/forms/FormWrapper';
import InputField from '@/shared/components/forms/InputField';
import TextareaField from '@/shared/components/forms/TextareaField';
import CheckboxField from '@/shared/components/forms/CheckboxField';
import { useTransition } from 'react';
import { createTask } from '../actions';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  done: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export default function TaskForm({ onSuccess }: { onSuccess: () => void }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema) as any,
    defaultValues: { title: '', description: '', done: false },
  });

  function onSubmit(values: FormValues) {
    startTransition(async () => {
      try {
        await createTask(values); // 👈 call server action directly
        onSuccess();
      } catch (err) {
        console.error(err);
        alert('Error creating task');
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
        <CheckboxField control={form.control} name="done" label="Mark as done" />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit Form'}
        </Button>
      </FormWrapper>
    </>
  );
}
