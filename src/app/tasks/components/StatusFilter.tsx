'use client';
import SelectField from '@/shared/components/forms/SelectField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/components/forms/FormWrapper';
import { useEffect } from 'react';

import { StatusesType } from '@/shared/types/models';

const schema = z.object({
  status: z.enum(['TODO', 'INPROGRESS', 'DONE']),
});

export default function StatusFilter({ onStatusChange }: { onStatusChange: any }) {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      status: '',
    },
  });
  const statusValue = form.watch('status');
  const onSubmit = (values: any) => {
    console.log('Form Values:', values);
  };
  useEffect(() => {
    if (statusValue) {
      if (statusValue === 'ALL') {
        onStatusChange('');
      } else {
        onStatusChange(statusValue as StatusesType);
      }
    }
  }, [statusValue, onStatusChange]);
  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <SelectField
        control={form.control}
        name="status"
        label=""
        placeholder="Filter By Status"
        options={[
          { label: 'All', value: 'ALL' },
          { label: 'Todo', value: 'TODO' },
          { label: 'Inprogress', value: 'INPROGRESS' },
          { label: 'Done', value: 'DONE' },
        ]}
        className="border border-gray-400 w-[170px]"
      />
    </FormWrapper>
  );
}
