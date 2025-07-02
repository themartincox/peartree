import { Suspense } from 'react';
import DirectDebitFormWrapper from './DirectDebitFormWrapper';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading form…</div>}>
      <DirectDebitFormWrapper />
    </Suspense>
  );
}
