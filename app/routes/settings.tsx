import { Link } from "react-router";
import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to LifeOS" },
  ];
}

export default function Settings() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Settings
      </h1>
    </>
  );
}
