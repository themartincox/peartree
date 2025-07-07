"use client";

import { useState, useEffect } from 'react';

export default function MembershipApplicationsAdmin() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/membership-applications');
      const data = await response.json();

      if (data.success) {
        setApplications(data.applications || []);
      }
    } catch (error) {
      console.error('Failed to load applications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Membership Applications</h1>

      <div className="mb-4 p-4 bg-blue-100 rounded">
        <p><strong>Total Applications:</strong> {applications.length}</p>
        <p><strong>Status:</strong> {loading ? 'Loading...' : 'Loaded'}</p>
      </div>

      {loading ? (
        <p>Loading applications...</p>
      ) : applications.length === 0 ? (
        <div className="p-4 bg-red-100 rounded">
          <p><strong>No applications found</strong></p>
          <p>API Response received, but no applications in the array.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app, index) => (
            <div key={app.id || index} className="p-4 border rounded bg-white shadow">
              <h3 className="font-bold">{app.firstName} {app.lastName}</h3>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Plan:</strong> {app.planName} ({app.planPrice})</p>
              <p><strong>Phone:</strong> {app.phone}</p>
              <p><strong>Date:</strong> {new Date(app.timestamp).toLocaleString()}</p>
              <p><strong>ID:</strong> {app.id}</p>
              {app.staffMemberName && <p><strong>Staff:</strong> {app.staffMemberName}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
