import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold mb-5">Test Page</h1>
      <p className="mb-4">
        This is a simple test page to diagnose rendering issues with the application.
      </p>
      <div className="p-4 bg-blue-100 rounded-md">
        <p>If you can see this page, then the basic rendering functionality is working.</p>
      </div>
    </div>
  );
}
