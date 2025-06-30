"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Medal,
  Award,
  Users,
  TrendingUp,
  Calendar,
  Refresh,
  UserCheck,
  Star
} from "lucide-react";

interface StaffMember {
  name: string;
  id: string;
  signups: number;
  lastSignup: string;
}

interface LeaderboardData {
  leaderboard: StaffMember[];
  totalSubmissions: number;
  clinicSignups: number;
}

interface RecentSubmission {
  id: string;
  name: string;
  plan: string;
  staffMember: string | null;
  submittedAt: string;
}

export default function StaffLeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData | null>(null);
  const [recentSubmissions, setRecentSubmissions] = useState<RecentSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const fetchData = async () => {
    try {
      setIsLoading(true);

      // Fetch leaderboard data
      const leaderboardResponse = await fetch('/api/membership/submit?action=leaderboard');
      const leaderboardResult = await leaderboardResponse.json();

      // Fetch recent submissions
      const submissionsResponse = await fetch('/api/membership/submit?action=submissions');
      const submissionsResult = await submissionsResponse.json();

      if (leaderboardResult.success) {
        setLeaderboardData(leaderboardResult);
      }

      if (submissionsResult.success) {
        setRecentSubmissions(submissionsResult.submissions);
      }

      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Star className="w-6 h-6 text-gray-300" />;
    }
  };

  const getRankBadgeColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 1:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 2:
        return "bg-gradient-to-r from-amber-400 to-amber-600 text-white";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background/30 to-white">
      {/* Header */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-pear-primary">Staff Performance Dashboard</h1>
              <p className="text-gray-600 mt-2">Track membership signup performance by staff members</p>
            </div>
            <Button onClick={fetchData} disabled={isLoading} variant="outline">
              <Refresh className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Signups</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{leaderboardData?.totalSubmissions || 0}</div>
              <p className="text-xs text-muted-foreground">All membership applications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clinic Signups</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pear-primary">{leaderboardData?.clinicSignups || 0}</div>
              <p className="text-xs text-muted-foreground">Staff-assisted signups</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {leaderboardData?.totalSubmissions ?
                  Math.round((leaderboardData.clinicSignups / leaderboardData.totalSubmissions) * 100) : 0}%
              </div>
              <p className="text-xs text-muted-foreground">Staff-assisted rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Staff Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Staff Leaderboard
              </CardTitle>
              <p className="text-sm text-gray-600">
                Ranked by membership signups facilitated
              </p>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pear-primary"></div>
                </div>
              ) : leaderboardData?.leaderboard.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <UserCheck className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p>No staff signups recorded yet</p>
                  <p className="text-sm">Staff members will appear here when they facilitate signups from the clinic</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leaderboardData?.leaderboard.map((staff, index) => (
                    <div key={staff.name} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {getRankIcon(index)}
                          <Badge className={getRankBadgeColor(index)}>
                            #{index + 1}
                          </Badge>
                        </div>
                        <div>
                          <p className="font-semibold">{staff.name}</p>
                          {staff.id && <p className="text-sm text-gray-500">ID: {staff.id}</p>}
                          <p className="text-xs text-gray-400">
                            Last signup: {formatDate(staff.lastSignup)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-pear-primary">
                          {staff.signups}
                        </div>
                        <div className="text-xs text-gray-500">signups</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Submissions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pear-primary" />
                Recent Submissions
              </CardTitle>
              <p className="text-sm text-gray-600">
                Latest membership applications
              </p>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pear-primary"></div>
                </div>
              ) : recentSubmissions.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p>No submissions yet</p>
                  <p className="text-sm">Recent membership applications will appear here</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentSubmissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div>
                        <p className="font-medium">{submission.name}</p>
                        <p className="text-sm text-gray-600">Plan: {submission.plan}</p>
                        {submission.staffMember && (
                          <Badge variant="secondary" className="mt-1 text-xs">
                            Staff: {submission.staffMember}
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">
                          {formatDate(submission.submittedAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Last Refresh Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Last refreshed: {formatDate(lastRefresh.toISOString())}
        </div>
      </div>
    </div>
  );
}
