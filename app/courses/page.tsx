import { getCourses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Courses
        </h1>
        <p className="mt-1 text-slate-500">
          {courses.length} courses offered this semester
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
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
