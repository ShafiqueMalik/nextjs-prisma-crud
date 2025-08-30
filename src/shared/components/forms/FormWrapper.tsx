// components/forms/FormWrapper.tsx
'use client';

import { Form } from '@/components/ui/form';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormWrapperProps {
  form: UseFormReturn<any>;
  onSubmit: (values: any) => void;
  children: React.ReactNode;
  className?: string;
}

export default function FormWrapper({ form, onSubmit, children, className }: FormWrapperProps) {
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={className ?? 'space-y-6'}>
          {children}
        </form>
      </Form>
    </FormProvider>
  );
}
