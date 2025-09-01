'use client';
import SelectField from '@/shared/components/forms/SelectField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/components/forms/FormWrapper';
import { useEffect } from 'react';

import { PriorityType } from '@/shared/types/models';

const schema = z.object({
  priority: z.enum(['TODO', 'INPROGRESS', 'DONE']),
});

export default function PriorityFilter({ onPriorityChange }: { onPriorityChange: any }) {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      priority: '',
    },
  });
  const priorityValue = form.watch('priority');
  const onSubmit = (values: any) => {
    console.log('Form Values:', values);
  };
  useEffect(() => {
    if (priorityValue) {
      if (priorityValue === 'ALL') {
        onPriorityChange('');
      } else {
        onPriorityChange(priorityValue as PriorityType);
      }
    }
  }, [priorityValue, onPriorityChange]);
  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <SelectField
        control={form.control}
        name="priority"
        label=""
        placeholder="Filter PRIORITY"
        options={[
          { label: 'All', value: 'ALL' },
          { label: 'Low', value: 'LOW' },
          { label: 'Medium', value: 'MEDIUM' },
          { label: 'HIGH', value: 'HIGH' },
        ]}
        className="border border-gray-400 w-[170px]"
      />
    </FormWrapper>
  );
}
