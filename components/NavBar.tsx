"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

// Client Component only because of usePathname() — layout.tsx stays a Server Component.
export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-4">
        <span className="mr-4 text-lg font-bold text-indigo-600 dark:text-indigo-400">
          📚 Course Catalog
        </span>
        {links.map(({ href, label }) => {
          // "/courses/web-security" also highlights "Courses"
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-400 ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
