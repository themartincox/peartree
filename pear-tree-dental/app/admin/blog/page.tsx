import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminBlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "AI-Powered Marketing Automation: The Future is Here",
      excerpt: "Discover how AI is revolutionizing marketing automation and why your business needs to adapt now.",
      author: "Martin",
      date: "2024-06-15",
      status: "published",
      category: "AI & Marketing",
      views: 1247,
      featured: true,
    },
    {
      id: 2,
      title: "10 Growth Marketing Strategies That Actually Work",
      excerpt: "Data-driven strategies that have helped our clients achieve consistent growth.",
      author: "Martin",
      date: "2024-06-10",
      status: "published",
      category: "Growth Strategy",
      views: 892,
      featured: false,
    },
    {
      id: 3,
      title: "Building Customer Personas with AI Analytics",
      excerpt: "Learn how to leverage AI tools to create accurate customer personas for better targeting.",
      author: "Martin",
      date: "2024-06-05",
      status: "draft",
      category: "Customer Experience",
      views: 0,
      featured: false,
    },
  ];

  const getStatusBadge = (status: string) => {
    const colors = {
      published: "bg-green-100 text-green-800",
      draft: "bg-yellow-100 text-yellow-800",
      scheduled: "bg-blue-100 text-blue-800",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="bg-midnight-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Blog Management</h1>
              <p className="text-white/80 mt-2">Manage your blog posts and content</p>
            </div>
            <Button asChild className="bg-coral-red hover:bg-coral-red/90 text-white">
              <Link href="/admin/blog/new">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search posts..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option value="">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-midnight-blue">{post.title}</h3>
                        {post.featured && (
                          <Badge className="bg-coral-red text-white text-xs">Featured</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span>{post.date}</span>
                        <span>{post.category}</span>
                        <span>{post.views} views</span>
                        <Badge className={getStatusBadge(post.status)}>
                          {post.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
