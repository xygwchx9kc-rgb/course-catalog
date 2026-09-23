export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 w-fit">
        About
      </span>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        About this project
      </h1>
      <p className="max-w-2xl text-slate-600">
        Course Catalog is a small demo app built for Lab 1 of the &quot;Advanced
        Web Technologies&quot; course. It showcases the Next.js App Router,
        Server and Client Components, and TypeScript, using mock course data
        instead of a real backend for now.
      </p>
    </section>
  );
}
