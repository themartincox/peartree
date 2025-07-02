"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function NewBlogPostPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="bg-midnight-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Create New Blog Post</h1>
              <p className="text-white/80 mt-2">Write and publish new content for your blog</p>
            </div>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-midnight-blue">
              <Link href="/admin/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Posts
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Blog Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Title
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your blog post title..."
                    className="text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    placeholder="Write your blog post content here..."
                    rows={20}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <Input
                    type="text"
                    defaultValue="Martin"
                    className="text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option value="">Select Category</option>
                    <option value="Marketing">Marketing</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Industry Insights">Industry Insights</option>
                  </select>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <Button className="w-full bg-forest-green hover:bg-forest-green/90 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Publish Post
                  </Button>
                  <Button variant="outline" className="w-full">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
