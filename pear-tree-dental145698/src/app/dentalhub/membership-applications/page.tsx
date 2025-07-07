"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Download,
  RefreshCw,
  Search,
  Users,
  Calendar,
  Mail,
  Phone,
  CreditCard,
  Trash2,
  AlertTriangle,
  CheckCircle,
  Eye
} from 'lucide-react';

interface MembershipApplication {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  planName: string;
  planPrice: string;
  dentistName?: string;
  isExistingPatient: string;
  accountHolderName?: string;
  sortCode?: string;
  accountNumber?: string;
  partnerFirstName?: string;
  partnerLastName?: string;
  staffMemberName?: string;
  familyMembers?: any[];
  [key: string]: any;
}

export default function MembershipApplicationsAdmin() {
  const [applications, setApplications] = useState<MembershipApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<MembershipApplication | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const loadApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/membership-applications');
      const data = await response.json();

      if (data.success) {
        setApplications(data.applications || []);
        setLastUpdated(new Date().toLocaleString());
      }
    } catch (error) {
      console.error('Failed to load applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = async () => {
    try {
      const response = await fetch('/api/admin/membership-applications?format=csv&download=true');
      const csvContent = await response.text();

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `membership-applications-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download CSV:', error);
      alert('Failed to download CSV file');
    }
  };

  const clearAllApplications = async () => {
    if (!confirm('Are you sure you want to clear ALL applications? This cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch('/api/admin/membership-applications', {
        method: 'DELETE'
      });

      if (response.ok) {
        setApplications([]);
        alert('All applications cleared successfully');
      }
    } catch (error) {
      console.error('Failed to clear applications:', error);
      alert('Failed to clear applications');
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const filteredApplications = applications.filter(app =>
    `${app.firstName} ${app.lastName} ${app.email} ${app.planName}`.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Membership Applications Admin
          </h1>
          <p className="text-gray-600">
            Backup storage for membership applications in case email delivery fails
          </p>
        </div>

        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold">{applications.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Today</p>
                  <p className="text-2xl font-bold">
                    {applications.filter(app =>
                      new Date(app.timestamp).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Family Plans</p>
                  <p className="text-2xl font-bold">
                    {applications.filter(app => app.planName === 'FAMILY PLAN').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Last Updated</p>
                  <p className="text-xs font-medium">{lastUpdated}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={loadApplications} variant="outline" disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>

            <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>

            <Button
              onClick={clearAllApplications}
              variant="destructive"
              className="bg-red-600 hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {/* Applications List */}
        {loading ? (
          <Card>
            <CardContent className="p-8 text-center">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Loading applications...</p>
            </CardContent>
          </Card>
        ) : filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-8 w-8 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">No Applications Found</h3>
              <p className="text-gray-600">
                {searchTerm ? 'No applications match your search.' : 'No membership applications have been submitted yet.'}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredApplications.map((app) => (
              <Card key={app.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {app.firstName} {app.lastName}
                        {app.partnerFirstName && (
                          <span className="text-sm font-normal text-gray-600 ml-2">
                            + {app.partnerFirstName} {app.partnerLastName}
                          </span>
                        )}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(app.timestamp)}
                        </span>
                        <span className="flex items-center">
                          <CreditCard className="h-3 w-3 mr-1" />
                          {app.planName} ({app.planPrice})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        ID: {app.id}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedApp(selectedApp?.id === app.id ? null : app)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        {selectedApp?.id === app.id ? 'Hide' : 'Details'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3 text-gray-400" />
                      <span>{app.email}</span>
                    </div>
                    {app.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span>{app.phone}</span>
                      </div>
                    )}
                    {app.dentistName && (
                      <div className="flex items-center space-x-2">
                        <Users className="h-3 w-3 text-gray-400" />
                        <span>Dentist: {app.dentistName}</span>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedApp?.id === app.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-3">Full Application Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Personal Info:</strong>
                          <ul className="mt-1 space-y-1 text-gray-600">
                            <li>Date of Birth: {app.dateOfBirth || 'Not provided'}</li>
                            <li>Address: {app.address || 'Not provided'}</li>
                            <li>Postcode: {app.postcode || 'Not provided'}</li>
                            <li>Existing Patient: {app.isExistingPatient}</li>
                          </ul>
                        </div>

                        <div>
                          <strong>Payment Info:</strong>
                          <ul className="mt-1 space-y-1 text-gray-600">
                            <li>Account Holder: {app.accountHolderName || 'Not provided'}</li>
                            <li>Sort Code: {app.sortCode || 'Not provided'}</li>
                            <li>Account: {app.accountNumber ? '****' + app.accountNumber.slice(-4) : 'Not provided'}</li>
                          </ul>
                        </div>

                        {app.partnerFirstName && (
                          <div>
                            <strong>Partner Info:</strong>
                            <ul className="mt-1 space-y-1 text-gray-600">
                              <li>Name: {app.partnerFirstName} {app.partnerLastName}</li>
                              <li>Email: {app.partnerEmail || 'Not provided'}</li>
                            </ul>
                          </div>
                        )}

                        {app.staffMemberName && (
                          <div>
                            <strong>Staff Info:</strong>
                            <ul className="mt-1 space-y-1 text-gray-600">
                              <li>Staff Member: {app.staffMemberName}</li>
                              <li>Clinic Signup: Yes</li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {app.familyMembers && app.familyMembers.length > 0 && (
                        <div className="mt-3">
                          <strong>Family Members: ({app.familyMembers.length})</strong>
                          <ul className="mt-1 space-y-1 text-sm text-gray-600">
                            {app.familyMembers.map((member: any, index: number) => (
                              <li key={index}>
                                {member.firstName} {member.lastName} ({member.relationship})
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Backup System Information</p>
              <p>
                This admin panel shows membership applications stored locally as backup.
                Applications are automatically saved here even if email delivery fails.
                Regular backups and email system monitoring are recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
