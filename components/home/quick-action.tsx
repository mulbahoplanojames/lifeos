import {
  Globe,
  HeartCrack,
  MessageCircleCheckIcon,
  PlusCircle,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function QuickActions() {
  return (
    <div className="flex gap-4 mb-12">
      <Link
        to="/tasks/new-task"
        className="bg-gradient-to-br cursor-pointer border-2 border-primary from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform"
      >
        <PlusCircle className="w-5 h-5" />
        Add Task
      </Link>
      <Link
        to="/chat/new-chat"
        className="bg-surface-container-high border-2 border-primary cursor-pointer text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors"
      >
        <MessageCircleCheckIcon className="w-5 h-5" />
        Start Chat
      </Link>
      <Link
        to="/travel-planner/new-travel-planner"
        className="bg-surface-container-high border-2 border-primary cursor-pointer text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors"
      >
        <Globe className="w-5 h-5" />
        Create Trip
      </Link>
      <Link
        to="/medical/new-medical"
        className="bg-surface-container-high border-2 border-primary cursor-pointer text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors"
      >
        <HeartCrack className="w-5 h-5" />
        Add Medical
      </Link>
    </div>
  );
}
