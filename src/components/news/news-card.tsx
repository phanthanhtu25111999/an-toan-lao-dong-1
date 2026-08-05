import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PostSummary } from "@/lib/mdx";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function NewsCard({ post }: { post: PostSummary }) {
  return (
    <Link href={`/tin-tuc/${post.slug}`}>
      <Card className="group h-full gap-0 overflow-hidden py-0 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">
            {post.category}
          </Badge>
        </div>
        <CardContent className="flex flex-col gap-3 p-5">
          <h3 className="font-heading text-base font-semibold text-balance line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
          <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readingTime} phút đọc
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
