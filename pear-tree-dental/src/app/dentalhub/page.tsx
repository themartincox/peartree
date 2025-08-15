"use client";

import React, { useState } from "react";

export default function DentalHubPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password check (in production, use proper authentication)
  const handleLogin = () => {
    // Simple password check - replace with proper auth in production
    if (password === "peartree2024" || password === "admin123") {
      setError("");
      window.location.href = "/"; // or route to the real hub page
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-md">
        <h1 className="text-3xl font-bold text-pear-primary mb-6">Dental Hub</h1>
        <p className="text-gray-600 mb-4">
          Enter your access password to continue.
        </p>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-600 text-sm mb-3">{error}</div>}
        <button
          onClick={handleLogin}
          className="bg-pear-primary text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </section>
    </div>
  );
}
