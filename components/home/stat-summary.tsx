import { CheckCheck, MailIcon, PlaneTakeoff, ShoppingBag } from "lucide-react";
import React from "react";

export default function StatSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <CheckCheck className="text-primary" />
          </div>
          <span className="text-[10px] font-bold uppercase text-slate-400">
            Tasks
          </span>
        </div>
        <div className="text-3xl font-bold mb-1">12</div>
        <div className="text-xs text-slate-500">4 priority pending</div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-secondary/10 rounded-lg">
            <MailIcon className="text-secondary" />
          </div>
          <span className="text-[10px] font-bold uppercase text-slate-400">
            Messages
          </span>
        </div>
        <div className="text-3xl font-bold mb-1">0</div>
        <div className="text-xs text-secondary font-medium">
          0 unread from teams
        </div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-tertiary/10 rounded-lg">
            <PlaneTakeoff className="text-tertiary" />
          </div>
          <span className="text-[10px] font-bold uppercase text-slate-400">
            Trips
          </span>
        </div>
        <div className="text-3xl font-bold mb-1">0</div>
        <div className="text-xs text-slate-500">No trips planned</div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-on-surface-variant/10 rounded-lg">
            <ShoppingBag className="text-on-surface-variant" />
          </div>
          <span className="text-[10px] font-bold uppercase text-slate-400">
            Cart Items
          </span>
        </div>
        <div className="text-3xl font-bold mb-1">0</div>
        <div className="text-xs text-slate-500">No items in cart</div>
      </div>
    </div>
  );
}
