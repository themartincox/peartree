import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  BookOpen,
  FileText,
  Image,
  Plus,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Blog Posts",
      value: "23",
      change: "+3 this month",
      icon: BookOpen,
      color: "text-forest-green",
    },
    {
      title: "Case Studies",
      value: "8",
      change: "+2 this month",
      icon: FileText,
      color: "text-coral-red",
    },
    {
      title: "Service Pages",
      value: "26",
      change: "All up to date",
      icon: Users,
      color: "text-midnight-blue",
    },
    {
      title: "Media Files",
      value: "147",
      change: "+12 this week",
      icon: Image,
      color: "text-forest-green",
    },
  ];

  const quickActions = [
    {
      title: "New Blog Post",
      description: "Create a new blog article",
      href: "/admin/blog/new",
      icon: Plus,
      color: "bg-forest-green",
    },
    {
      title: "Manage Blog",
      description: "Edit existing blog posts",
      href: "/admin/blog",
      icon: BookOpen,
      color: "bg-coral-red",
    },
    {
      title: "Content Manager",
      description: "Update page content and settings",
      href: "/admin/content",
      icon: FileText,
      color: "bg-midnight-blue",
    },
    {
      title: "Media Library",
      description: "Upload and manage images",
      href: "/admin/media",
      icon: Image,
      color: "bg-forest-green",
    },
    {
      title: "Site Settings",
      description: "Configure global settings",
      href: "/admin/settings",
      icon: Settings,
      color: "bg-charcoal",
    },
    {
      title: "Analytics",
      description: "View site performance",
      href: "/admin/analytics",
      icon: BarChart3,
      color: "bg-coral-red",
    },
  ];

  const recentActivity = [
    {
      action: "Created new blog post",
      item: "AI-Driven Marketing Strategies for 2025",
      time: "2 hours ago",
      status: "draft",
    },
    {
      action: "Updated case study",
      item: "Precision Manufacturing Success Story",
      time: "1 day ago",
      status: "published",
    },
    {
      action: "Added new service",
      item: "Predictive Analytics Service Page",
      time: "3 days ago",
      status: "published",
    },
    {
      action: "Updated pricing",
      item: "SEO Service Package Pricing",
      time: "1 week ago",
      status: "published",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Admin Header */}
      <div className="bg-midnight-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
              <p className="text-gray-300 mt-2">
                Manage your content, blog posts, and site settings
              </p>
            </div>
            <Badge className="bg-forest-green text-white">
              Administrator
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <section className="py-12 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={`stat-${index}`} className="bg-white shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-midnight-blue mb-8">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={`action-${index}`}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}
                    >
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading text-midnight-blue group-hover:text-coral-red transition-colors">
                        {action.title}
                      </CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-coral-red group-hover:text-white group-hover:border-coral-red transition-colors"
                  >
                    <Link href={action.href}>
                      Access {action.title}
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-midnight-blue mb-8">
            Recent Activity
          </h2>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-heading text-midnight-blue">
                Latest Updates
              </CardTitle>
              <CardDescription>
                Recent changes to your content and settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={`activity-${index}`}
                    className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-midnight-blue">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.item}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                    <Badge
                      className={
                        activity.status === "published"
                          ? "bg-forest-green text-white"
                          : "bg-gray-500 text-white"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-gray-400">
            © 2025 Postino Ltd. Admin Dashboard - All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
