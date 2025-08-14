"use client";
import React from "react";

import { useEffect, useState } from "react";

interface Application {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  planName: string;
  planPrice: string;
  phone?: string;
  staffMemberName?: string;
  [key: string]: any;
}

interface ApiResponse {
  success: boolean;
  applications?: Application[];
  count?: number;
  error?: string;
  details?: string;
  filePath?: string;
  fileExists?: boolean;
}

export default function MembershipApplicationsAdmin() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const loadApplications = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Fetching applications...");
      const response = await fetch("/api/admin/membership-applications");

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();
      console.log("API Response:", data);

      setDebugInfo(data);

      if (data.success) {
        setApplications(data.applications || []);
        console.log("Applications loaded:", data.applications?.length || 0);
      } else {
        setError(data.error || "Unknown error occurred");
        console.error("API returned error:", data.error, data.details);
      }
    } catch (error) {
      console.error("Failed to load applications:", error);
      setError(
        error instanceof Error ? error.message : "Failed to load applications",
      );
    } finally {
      setLoading(false);
    }
  };

  const testDirectEndpoint = async () => {
    try {
      console.log("Testing membership submit endpoint...");
      const response = await fetch("/api/membership/submit");
      console.log(
        "Submit endpoint response:",
        response.status,
        response.statusText,
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Submit endpoint data:", data);
      }
    } catch (error) {
      console.error("Submit endpoint error:", error);
    }
  };

  const clearApplications = async () => {
    if (
      !confirm(
        "Are you sure you want to clear all applications? This cannot be undone.",
      )
    ) {
      return;
    }

    try {
      const response = await fetch("/api/admin/membership-applications", {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Applications cleared successfully");
        await loadApplications();
      } else {
        alert("Failed to clear applications");
      }
    } catch (error) {
      console.error("Failed to clear applications:", error);
      alert("Error clearing applications");
    }
  };

  useEffect(() => {
    loadApplications();
    testDirectEndpoint();
  }, [loadApplications, testDirectEndpoint]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Membership Applications Admin
        </h1>
        <div className="flex gap-4">
          <button
            onClick={loadApplications}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
          <button
            onClick={clearApplications}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Clear All
          </button>
          <a
            href="/api/admin/membership-applications?format=csv&download=true"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 inline-block"
          >
            Download CSV
          </a>
        </div>
      </div>

      {/* Status Information */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="font-semibold text-blue-800">Status</h3>
          <p className="text-blue-700">
            {loading ? "Loading..." : error ? "Error" : "Ready"}
          </p>
          <p className="text-sm text-blue-600">
            Total Applications: {applications.length}
          </p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg">
          <h3 className="font-semibold text-green-800">API Status</h3>
          <p className="text-green-700">
            {debugInfo?.success ? "✅ Working" : "❌ Error"}
          </p>
          <p className="text-sm text-green-600">
            File Exists: {debugInfo?.fileExists ? "Yes" : "No"}
          </p>
        </div>

        <div className="p-4 bg-purple-100 rounded-lg">
          <h3 className="font-semibold text-purple-800">Debug Info</h3>
          <p className="text-purple-700 text-sm">
            Path: {debugInfo?.filePath?.split("/").pop() || "Unknown"}
          </p>
          <p className="text-purple-700 text-sm">
            Count: {debugInfo?.count || 0}
          </p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
          <h3 className="font-bold text-red-800">Error</h3>
          <p className="text-red-700">{error}</p>
          {debugInfo?.details && (
            <details className="mt-2">
              <summary className="cursor-pointer text-red-600">
                Technical Details
              </summary>
              <pre className="mt-2 text-xs bg-red-50 p-2 rounded overflow-x-auto">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading applications...</p>
        </div>
      )}

      {/* No Applications */}
      {!loading && !error && applications.length === 0 && (
        <div className="p-8 bg-yellow-100 rounded-lg text-center">
          <h3 className="font-bold text-yellow-800">No Applications Found</h3>
          <p className="text-yellow-700 mt-2">
            No membership applications have been submitted yet, or they may not
            be saving properly.
          </p>
          <p className="text-sm text-yellow-600 mt-2">
            Try submitting a test application to verify the system is working.
          </p>
        </div>
      )}

      {/* Applications List */}
      {!loading && !error && applications.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Applications ({applications.length})
          </h2>

          <div className="grid gap-6">
            {(applications || []).map((app, index) => (
              <div
                key={app.id || index}
                className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {app.firstName} {app.lastName}
                    </h3>
                    <p className="text-gray-600">{app.email}</p>
                    {app.phone && <p className="text-gray-600">{app.phone}</p>}
                  </div>

                  <div>
                    <p className="font-semibold text-blue-700">
                      {app.planName}
                    </p>
                    <p className="text-blue-600">{app.planPrice}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(app.timestamp).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm">
                      <span className="font-medium">ID:</span> {app.id}
                    </p>
                    {app.staffMemberName && (
                      <p className="text-sm">
                        <span className="font-medium">Staff:</span>{" "}
                        {app.staffMemberName}
                      </p>
                    )}
                    {app.isExistingPatient && (
                      <p className="text-sm">
                        <span className="font-medium">Existing Patient:</span>{" "}
                        {app.isExistingPatient}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Details Toggle */}
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                    View Full Details
                  </summary>
                  <pre className="mt-2 text-xs bg-gray-50 p-3 rounded overflow-x-auto">
                    {JSON.stringify(app, null, 2)}
                  </pre>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Debug Information */}
      {debugInfo && (
        <details className="mt-8">
          <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
            Full Debug Information
          </summary>
          <pre className="mt-2 text-xs bg-gray-100 p-4 rounded overflow-x-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}
