import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="flex flex-col items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-10">
      <span className="text-4xl">🔍</span>
      <h1 className="text-2xl font-bold text-slate-900">Course not found</h1>
      <p className="text-slate-600">
        We couldn&apos;t find the course you&apos;re looking for.
      </p>
      <Link
        href="/courses"
        className="w-fit rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-700"
      >
        Back to courses
      </Link>
    </section>
  );
}
