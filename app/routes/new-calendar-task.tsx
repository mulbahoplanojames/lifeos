import { Link } from "react-router";
import type { Route } from "./+types/new-calendar-task";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to LifeOS" },
  ];
}

export default function NewCalendarTask() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        New Calendar Task
      </h1>

      <Link
        to="/calendar-task"
        className="bg-surface-container-high border-2 border-primary cursor-pointer text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors w-32 justify-center"
      >
        Back
      </Link>
    </>
  );
}
