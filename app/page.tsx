import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-start gap-5 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-white p-10 shadow-sm">
      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
        Advanced Web Technologies
      </span>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Course Catalog
      </h1>
      <p className="max-w-xl text-lg text-slate-600">
        Browse the courses offered this semester in the &quot;Advanced Web
        Technologies&quot; program and see what each one covers.
      </p>
      <Link
        href="/courses"
        className="inline-block w-fit rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
      >
        Browse courses →
      </Link>
    </section>
  );
}
