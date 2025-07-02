'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function DirectDebitFormWrapper() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // This page is deprecated, redirect to main signup
    window.location.href = '/membership/signup';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p>Taking you to our membership signup page.</p>
      </div>
    </div>
  );
}
