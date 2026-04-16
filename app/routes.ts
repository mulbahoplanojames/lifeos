import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  ...prefix("tasks", [
    index("./routes/tasks.tsx"),
    route("new-task", "./routes/new-task.tsx"),
  ]),
  ...prefix("travel-planner", [
    index("./routes/travel-planner.tsx"),
    route("new-travel-planner", "./routes/new-travel-planner.tsx"),
  ]),
  ...prefix("store", [
    index("./routes/store.tsx"),
    route("new-store", "./routes/new-store.tsx"),
  ]),
  ...prefix("chat", [
    index("./routes/chat.tsx"),
    route("new-chat", "./routes/new-chat.tsx"),
  ]),
] satisfies RouteConfig;
