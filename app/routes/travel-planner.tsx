import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to LifeOS" },
  ];
}

export default function TravelPlanner() {
  return (
    <>
      <h1>Travel Planner</h1>
    </>
  );
}
