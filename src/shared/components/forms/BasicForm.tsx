'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import FormWrapper from './FormWrapper';
import InputField from './InputField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';
import RadioGroupField from './RadioGroupField';
import CheckboxField from './CheckboxField';

// ✅ Validation Schema
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  country: z.string().min(1, 'Please select a country'),
  gender: z.enum(['male', 'female'], { message: 'Please select your gender' }) as any,
  terms: z.boolean().refine((val) => val, { message: 'You must accept the terms' }),
});

export default function FullDemoForm() {
  const form = useForm({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: '',
      email: '',
      bio: '',
      country: '',
      gender: '',
      terms: false,
    },
  });

  const onSubmit = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      {/* Name */}
      <InputField
        control={form.control}
        name="name"
        label="Full Name"
        placeholder="Enter your name"
      />

      {/* Email */}
      <InputField
        control={form.control}
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        type="email"
      />

      {/* Bio */}
      <TextareaField
        control={form.control}
        name="bio"
        label="Bio"
        placeholder="Write something about yourself..."
      />

      {/* Country Select */}
      <SelectField
        control={form.control}
        name="country"
        label="Country"
        placeholder="Select your country"
        options={[
          { label: 'Pakistan', value: 'pakistan' },
          { label: 'United States', value: 'usa' },
          { label: 'United Kingdom', value: 'uk' },
        ]}
      />

      {/* Gender */}
      <RadioGroupField
        control={form.control}
        name="gender"
        label="Gender"
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />

      {/* Terms & Conditions */}
      <CheckboxField
        control={form.control}
        name="terms"
        label="I agree to the terms and conditions"
      />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Submit Form
      </Button>
    </FormWrapper>
  );
}
