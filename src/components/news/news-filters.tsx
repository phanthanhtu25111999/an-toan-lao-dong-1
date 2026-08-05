"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/news-card";
import type { PostSummary } from "@/lib/mdx";
import { cn } from "@/lib/utils";

export function NewsFilters({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = !category || post.category === category;
      const matchesQuery =
        !query.trim() ||
        post.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={category === null ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(null)}
          >
            Tất cả
          </Button>
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm kiếm bài viết..."
            className="pl-9"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3")}>
          {filtered.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted-foreground">
          Không tìm thấy bài viết phù hợp.
        </p>
      )}
    </div>
  );
}
