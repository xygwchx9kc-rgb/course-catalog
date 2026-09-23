import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse, getCourses } from "@/lib/courses";
import { LikeButton } from "@/components/LikeButton";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
      <Link
        href="/courses"
        className="w-fit text-sm font-medium text-indigo-600 hover:underline"
      >
        ← Back to courses
      </Link>
      <div className="flex flex-wrap items-center gap-3">
        {course.isElective && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Elective
          </span>
        )}
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {course.credits} credits
        </span>
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        {course.title}
      </h1>
      <p className="max-w-2xl text-slate-600">{course.description}</p>
      <LikeButton initialLikes={course.likes} />
    </article>
  );
}
