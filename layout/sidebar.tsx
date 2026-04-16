import {
  BookDashedIcon,
  CheckCheck,
  HeartCrack,
  MessageCircleCheckIcon,
  PlaneLandingIcon,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { NavLink } from "react-router";

const navLinks = [
  {
    title: "Dashboard",
    href: "/",
    icon: BookDashedIcon,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckCheck,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },

  {
    title: "Travel Planner",
    href: "/travel-planner",
    icon: PlaneLandingIcon,
  },
  {
    title: "Store",
    href: "/store",
    icon: ShoppingBag,
  },
  {
    title: "Medical",
    href: "/medical",
    icon: HeartCrack,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageCircleCheckIcon,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-slate-50 dark:bg-slate-950 w-64 pt-20 border-r border-slate-200 dark:border-slate-800">
      <div className="mb-8 px-4">
        <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
          LifeOS
        </h2>
        <p className="text-[10px] uppercase tracking-[0.05em] text-slate-400 font-semibold">
          The Digital Atheneum
        </p>
      </div>
      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-white"
                      : "text-indigo-600 dark:text-indigo-400"
                  }`}
                />
                <span className="text-sm font-semibold">{link.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
