import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("tasks", "routes/tasks.tsx"),
  route("travel-planner", "routes/travel-planner.tsx"),
  route("store", "routes/store.tsx"),
] satisfies RouteConfig;
