import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

// Server Component: no 'use client' needed for Card/Button.
export function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="group block h-full">
      <Card className="h-full hover:shadow-md hover:border-blue-300 transition dark:hover:border-blue-500">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {credits} credits
            </span>
            <Button variant="ghost" size="sm" className="text-rose-500">
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
