import { Globe, MessageCircleCheckIcon, PlusCircle } from "lucide-react";
import React from "react";

export default function QuickActions() {
  return (
    <div className="flex gap-4 mb-12">
      <button className="bg-gradient-to-br cursor-pointer border-2 border-primary from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
        <PlusCircle className="w-5 h-5" />
        Add Task
      </button>
      <button className="bg-surface-container-high border-2 border-primary cursor-pointer text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
        <MessageCircleCheckIcon className="w-5 h-5" />
        Start Chat
      </button>
      <button className="bg-surface-container-high border-2 border-primary cursor-pointer text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
        <Globe className="w-5 h-5" />
        Create Trip
      </button>
    </div>
  );
}
