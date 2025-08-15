"use client";

import React, { useEffect, useState } from "react";

type Job = {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  done: boolean;
};

export default function JobsToBeDonePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJob, setNewJob] = useState<{ title: string; priority: Job["priority"] }>({
    title: "",
    priority: "medium",
  });

  // Load jobs from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("jobsToBeDone");
    if (saved) {
      try {
        setJobs(JSON.parse(saved));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Persist jobs to localStorage on change
  useEffect(() => {
    localStorage.setItem("jobsToBeDone", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = () => {
    if (!newJob.title.trim()) return;
    const job: Job = {
      id: crypto.randomUUID(),
      title: newJob.title.trim(),
      priority: newJob.priority,
      done: false,
    };
    setJobs((prev) => [job, ...prev]);
    setNewJob({ title: "", priority: "medium" });
  };

  const toggleJob = (id: string) =>
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, done: !j.done } : j)));

  const removeJob = (id: string) =>
    setJobs((prev) => prev.filter((j) => j.id !== id));

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl">
        <h1 className="text-3xl font-bold text-pear-primary mb-6">Jobs To Be Done</h1>

        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Add a job…"
            value={newJob.title}
            onChange={(e) => setNewJob((s) => ({ ...s, title: e.target.value }))}
          />
          <select
            className="border rounded px-3 py-2"
            value={newJob.priority}
            onChange={(e) =>
              setNewJob((s) => ({ ...s, priority: e.target.value as Job["priority"] }))
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={addJob} className="bg-pear-primary text-white px-4 py-2 rounded">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="flex items-center justify-between border rounded px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={job.done}
                  onChange={() => toggleJob(job.id)}
                />
                <div>
                  <div className={`font-medium ${job.done ? "line-through text-gray-400" : ""}`}>
                    {job.title}
                  </div>
                  <div className="text-xs text-gray-500">Priority: {job.priority}</div>
                </div>
              </div>
              <button onClick={() => removeJob(job.id)} className="text-red-600 text-sm">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
