import QuickActions from "../../components/home/quick-action";
import StatSummary from "../../components/home/stat-summary";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to LifeOS" },
  ];
}

export default function Home() {
  return (
    <>
      <main>
        <header className="mb-12">
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-primary mb-2 block">
            Curation Active
          </span>
          <h1 className="text-5xl font-extrabold text-on-surface tracking-tight mb-2">
            Welcome back, Adrian.
          </h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">
            Your digital atheneum is synchronized. You have 4 tasks requiring
            immediate focus and 2 upcoming departures.
          </p>
        </header>
        <QuickActions />
        <StatSummary />
      </main>
    </>
  );
}
