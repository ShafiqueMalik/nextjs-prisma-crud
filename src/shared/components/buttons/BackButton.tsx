'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({
  label = 'Back',
  className = '',
}: {
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2  rounded text-primary cursor-pointer hover:scale-110 transition ${className}`}
      onClick={() => router.back()}
    >
      <ArrowLeft size={18} />
      {label}
    </button>
  );
}
