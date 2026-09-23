import { getCourses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Courses
        </h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          {courses.length} courses offered this semester
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </section>
  );
}
