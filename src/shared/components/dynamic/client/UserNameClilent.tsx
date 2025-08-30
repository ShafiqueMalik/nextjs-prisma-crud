'use client';
import { useSession } from 'next-auth/react';

export default function UserName() {
  const { data: session } = useSession();
  if (!session) return 'Fetching...';
  return <>{session?.user?.name}</>;
}
