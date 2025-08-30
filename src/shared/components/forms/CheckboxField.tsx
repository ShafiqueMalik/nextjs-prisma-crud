// components/forms/CheckboxField.tsx
'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';

interface CheckboxFieldProps {
  control: Control<any>;
  name: string;
  label: string;
}

export default function CheckboxField({ control, name, label }: CheckboxFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked)}
              className=""
            />
          </FormControl>
          <FormLabel>{label}</FormLabel>
          <FormMessage className="text-[10px] block" />
        </FormItem>
      )}
    />
  );
}
