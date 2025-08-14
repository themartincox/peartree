"use client";
import React from "react";

import {
  Calendar,
  CheckCircle,
  Edit2,
  Plus,
  Save,
  Target,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface JobItem {
  id: string;
  issue: string;
  idealResolution: string;
  foundBy: string;
  fixBy: string;
  date: string;
  status: "open" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
}

export default function JobsToBeDonePage() {
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editingJob, setEditingJob] = useState<JobItem>({
    id: "",
    issue: "",
    idealResolution: "",
    foundBy: "",
    fixBy: "",
    date: new Date().toISOString().split("T")[0],
    status: "open",
    priority: "medium",
  });

  // Load jobs from localStorage on component mount
  useEffect(() => {
    const savedJobs = localStorage.getItem("jobsToBeDone");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      // Add some sample data
      const sampleJobs: JobItem[] = [
        {
          id: "1",
          issue: "Contact form not sending emails",
          idealResolution: "Fix email configuration and test form submissions",
          foundBy: "Patient feedback",
          fixBy: "Developer",
          date: "2024-12-10",
          status: "open",
          priority: "high",
        },
        {
          id: "2",
          issue: "Mobile navigation menu overlap",
          idealResolution: "Adjust z-index and positioning for mobile menu",
          foundBy: "Website audit",
          fixBy: "Design team",
          date: "2024-12-08",
          status: "in-progress",
          priority: "medium",
        },
      ];
      setJobs(sampleJobs);
      localStorage.setItem("jobsToBeDone", JSON.stringify(sampleJobs));
    }
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem("jobsToBeDone", JSON.stringify(jobs));
    }
  }, [jobs]);

  const handleAdd = () => {
    setEditingJob({
      id: "",
      issue: "",
      idealResolution: "",
      foundBy: "",
      fixBy: "",
      date: new Date().toISOString().split("T")[0],
      status: "open",
      priority: "medium",
    });
    setIsAdding(true);
  };

  const handleEdit = (job: JobItem) => {
    setEditingJob({ ...job });
    setIsEditing(job.id);
  };

  const handleSave = () => {
    if (isAdding) {
      const newJob = {
        ...editingJob,
        id: Date.now().toString(),
      };
      setJobs([...jobs, newJob]);
      setIsAdding(false);
    } else if (isEditing) {
      setJobs(jobs.map((job) => (job.id === isEditing ? editingJob : job)));
      setIsEditing(null);
    }
    setEditingJob({
      id: "",
      issue: "",
      idealResolution: "",
      foundBy: "",
      fixBy: "",
      date: new Date().toISOString().split("T")[0],
      status: "open",
      priority: "medium",
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(null);
    setEditingJob({
      id: "",
      issue: "",
      idealResolution: "",
      foundBy: "",
      fixBy: "",
      date: new Date().toISOString().split("T")[0],
      status: "open",
      priority: "medium",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return "🔴";
      case "medium":
        return "🟡";
      case "low":
        return "🔵";
      default:
        return "⚪";
    }
  };

  const jobStats = {
    total: jobs.length,
    open: jobs.filter((job) => job.status === "open").length,
    inProgress: jobs.filter((job) => job.status === "in-progress").length,
    completed: jobs.filter((job) => job.status === "completed").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jobs To Be Done
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track and manage website improvements, bug fixes, and development
            tasks for the dental practice website.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600">
                {jobStats.total}
              </div>
              <p className="text-sm text-gray-600">Total Jobs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-600">
                {jobStats.open}
              </div>
              <p className="text-sm text-gray-600">Open</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-yellow-600">
                {jobStats.inProgress}
              </div>
              <p className="text-sm text-gray-600">In Progress</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600">
                {jobStats.completed}
              </div>
              <p className="text-sm text-gray-600">Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Add Job Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Jobs List</h2>
          <Button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Job
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || isEditing) && (
          <Card className="mb-6 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                {isAdding ? "Add New Job" : "Edit Job"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issue
                </label>
                <Textarea
                  value={editingJob.issue}
                  onChange={(e) =>
                    setEditingJob({ ...editingJob, issue: e.target.value })
                  }
                  placeholder="Describe the issue or task..."
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ideal Resolution
                </label>
                <Textarea
                  value={editingJob.idealResolution}
                  onChange={(e) =>
                    setEditingJob({
                      ...editingJob,
                      idealResolution: e.target.value,
                    })
                  }
                  placeholder="Describe the ideal solution..."
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Found By
                  </label>
                  <Input
                    value={editingJob.foundBy}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, foundBy: e.target.value })
                    }
                    placeholder="Who discovered this issue?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fix By
                  </label>
                  <Input
                    value={editingJob.fixBy}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, fixBy: e.target.value })
                    }
                    placeholder="Who should fix this?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <Input
                    type="date"
                    value={editingJob.date}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, date: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <Select
                    value={editingJob.status}
                    onValueChange={(
                      value: "open" | "in-progress" | "completed",
                    ) => setEditingJob({ ...editingJob, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                  </label>
                  <Select
                    value={editingJob.priority}
                    onValueChange={(value: "low" | "medium" | "high") =>
                      setEditingJob({ ...editingJob, priority: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  No jobs yet
                </h3>
                <p className="text-gray-500">
                  Add your first job to get started tracking improvements.
                </p>
              </CardContent>
            </Card>
          ) : (
            jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">
                          {getPriorityIcon(job.priority)}
                        </span>
                        <Badge className={getStatusColor(job.status)}>
                          {job.status === "in-progress"
                            ? "In Progress"
                            : job.status.charAt(0).toUpperCase() +
                              job.status.slice(1)}
                        </Badge>
                        <Badge className={getPriorityColor(job.priority)}>
                          {job.priority.charAt(0).toUpperCase() +
                            job.priority.slice(1)}{" "}
                          Priority
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {job.issue}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {job.idealResolution}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>
                            <strong>Found by:</strong> {job.foundBy}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span>
                            <strong>Fix by:</strong> {job.fixBy}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>
                            <strong>Date:</strong>{" "}
                            {new Date(job.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 ml-4">
                      <Button
                        onClick={() => handleEdit(job)}
                        size="sm"
                        variant="outline"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(job.id)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Jobs to be done for Pear Tree Dental website improvements and
            maintenance.
          </p>
          <p className="mt-1">Data is stored locally in your browser.</p>
        </div>
      </div>
    </div>
  );
}
