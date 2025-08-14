"use client";

import {
  CheckCircle,
  Database,
  Eye,
  FileText,
  Lock,
  Mail,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password check (in production, use proper authentication)
  const handleLogin = () => {
    // Simple password check - replace with proper auth in production
    if (password === "peartree2024" || password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 mx-auto text-pear-primary mb-4" />
            <CardTitle>Admin Access</CardTitle>
            <p className="text-sm text-gray-600">
              Enter admin password to continue
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
              {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </div>
            <Button onClick={handleLogin} className="w-full">
              <Lock className="h-4 w-4 mr-2" />
              Access Admin Panel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Pear Tree Dental Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Administrative tools and system management
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">System Status</p>
                  <p className="font-semibold text-green-600">Operational</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Backup System</p>
                  <p className="font-semibold text-blue-600">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-sm text-gray-600">Email System</p>
                  <p className="font-semibold text-yellow-600">Config Needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Security</p>
                  <p className="font-semibold text-purple-600">Protected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Membership Applications */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Membership Applications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                View and manage membership application backups. Download
                applications as CSV or clear old records.
              </p>
              <Link href="/dentalhub/membership-applications">
                <Button className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  View Applications
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Email System */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span>Email System</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Test email configuration and view email delivery status.
                Configure Gmail App Password for live emails.
              </p>
              <Link href="/api/test-email" target="_blank">
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Test Email System
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-purple-600" />
                <span>System Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Configure system settings, environment variables, and
                application preferences.
              </p>
              <Button variant="outline" className="w-full" disabled>
                <FileText className="h-4 w-4 mr-2" />
                Settings (Coming Soon)
              </Button>
            </CardContent>
          </Card>

          {/* API Endpoints */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-orange-600" />
                <span>API Endpoints</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Direct access to API endpoints for testing and data retrieval.
              </p>
              <div className="space-y-2">
                <Link href="/api/membership/submit" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  >
                    View Membership API
                  </Button>
                </Link>
                <Link href="/api/admin/membership-applications" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  >
                    Admin API
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Documentation */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-red-600" />
                <span>Documentation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                System documentation, setup guides, and troubleshooting
                information.
              </p>
              <Link href="/.same/email-setup-instructions.md" target="_blank">
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Email Setup Guide
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Common administrative tasks and system utilities.
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => window.location.reload()}
                >
                  Refresh Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => setIsAuthenticated(false)}
                >
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Information */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">System Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                <strong>Version:</strong> 316
              </p>
              <p>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                <strong>Environment:</strong> Production
              </p>
            </div>
            <div>
              <p>
                <strong>Backup Storage:</strong> File-based (.applications/)
              </p>
              <p>
                <strong>Email Status:</strong> Requires Gmail App Password
              </p>
              <p>
                <strong>Deployment:</strong> Netlify Dynamic
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Pear Tree Dental Centre - Administrative Dashboard</p>
          <p>For technical support, please contact the development team</p>
        </div>
      </div>
    </div>
  );
}
