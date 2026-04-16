import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to LifeOS" },
  ];
}

export default function Task() {
  return (
    <>
      <h1>Tasks</h1>
    </>
  );
}
