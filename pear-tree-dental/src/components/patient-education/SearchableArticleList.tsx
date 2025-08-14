"use client";

import { BookOpen, Clock, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EducationArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
  author: string;
  publishDate: string;
  tags: string[];
  href: string;
  downloadable?: boolean;
}

interface SearchableArticleListProps {
  articles: EducationArticle[];
  categories: string[];
}

export default function SearchableArticleList({
  articles,
  categories,
}: SearchableArticleListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  // Filter articles based on search query and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Articles" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the filter effect
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search for dental topics, treatments, or conditions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-pear-primary focus:outline-none text-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pear-primary hover:bg-pear-primary/90"
          >
            Search
          </Button>
        </form>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="w-5 h-5 text-pear-primary" />
          <h3 className="font-semibold text-pear-primary">
            Filter by Category
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-pear-primary text-white"
                  : "border-pear-primary/20 text-pear-primary hover:bg-pear-primary hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Search Results Summary */}
      {(searchQuery || selectedCategory !== "All Articles") && (
        <div className="bg-pear-primary/5 rounded-lg p-4">
          <p className="text-pear-primary">
            {filteredArticles.length} article
            {filteredArticles.length !== 1 ? "s" : ""} found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "All Articles" && ` in "${selectedCategory}"`}
            {searchQuery &&
              selectedCategory !== "All Articles" &&
              ` in "${selectedCategory}"`}
          </p>
          {(searchQuery || selectedCategory !== "All Articles") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Articles");
              }}
              className="mt-2 text-pear-primary hover:text-pear-primary/80"
            >
              Clear filters
            </Button>
          )}
        </div>
      )}

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Article Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>

                    {article.new && (
                      <Badge className="text-xs bg-dental-green text-white">
                        New
                      </Badge>
                    )}
                    {article.popular && (
                      <Badge className="text-xs bg-pear-gold text-white">
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-semibold text-lg text-pear-primary mb-3 group-hover:text-pear-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-gray-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Article Meta */}
                <div className="border-t pt-4 mt-auto">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.readTime}</span>
                  </div>

                  <Button
                    className="w-full bg-pear-primary hover:bg-pear-primary/90 text-white"
                    asChild
                  >
                    <Link href={article.href}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Article
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No articles found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or removing filters to see more
            results.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Articles");
            }}
            className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
          >
            Clear all filters
          </Button>
        </div>
      )}

      {/* Load More Button */}
      {filteredArticles.length >= 9 && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-pear-primary text-pear-primary hover:bg-pear-primary hover:text-white"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  );
}
