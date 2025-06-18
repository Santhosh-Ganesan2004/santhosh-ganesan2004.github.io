'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export default function BackButton({ className = '' }: { className?: string }) {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className={className}>
      Back
    </Button>
  );
} 