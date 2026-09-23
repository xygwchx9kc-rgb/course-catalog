import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
        {title}
      </h2>
      <p className="mt-1.5 text-sm text-slate-500">{description}</p>
      <div className="mt-4 flex items-center gap-3 text-sm">
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700">
          {credits} credits
        </span>
        <span className="text-rose-500">❤ {likes}</span>
      </div>
    </Link>
  );
}
