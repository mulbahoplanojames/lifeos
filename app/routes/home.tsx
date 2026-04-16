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
        {/* <!-- Quick Actions --> */}
        <div className="flex gap-4 mb-12">
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-xl">add</span>
            Add Task
          </button>
          <button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-xl">
              chat_bubble
            </span>
            Start Chat
          </button>
          <button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-xl">explore</span>
            Create Trip
          </button>
        </div>
        {/* <!-- Summary Stat Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">
                  assignment
                </span>
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
                <span className="material-symbols-outlined text-secondary">
                  mail
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase text-slate-400">
                Messages
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-xs text-secondary font-medium">
              3 unread from teams
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary/10 rounded-lg">
                <span className="material-symbols-outlined text-tertiary">
                  flight_takeoff
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase text-slate-400">
                Trips
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">2</div>
            <div className="text-xs text-slate-500">Next: Zurich in 4 days</div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-on-surface-variant/10 rounded-lg">
                <span className="material-symbols-outlined text-on-surface-variant">
                  shopping_cart
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase text-slate-400">
                Cart Items
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">5</div>
            <div className="text-xs text-slate-500">$1,240 total value</div>
          </div>
        </div>
        {/* <!-- Bento Grid Main Area --> */}
        <div className="grid grid-cols-12 gap-6">
          {/* <!-- Recent Activity - Large Card --> */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="px-8 py-6 border-b border-surface-container">
              <h3 className="text-xl font-bold">Workspace Intelligence</h3>
            </div>
            <div className="p-8 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    alt="Activity contributor"
                    className="w-full h-full object-cover"
                    data-alt="Close up portrait of a smiling creative professional woman with vibrant energy and soft studio lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrIocuwqev1Srz3CEnOy1W2g7ddWBkjQh_sjAR6C1sIorL8iuixz5J3vcdMmxTmhb1urtGmnnZthgsMCO9j5v-7hNQyoY3PqOqQe5QD2PZD5oz3J-QsAvZJHQX1xOl7A3EenQGpPkCzniEMiJgVyReM5wq3Vlb-V8c4GQTAWsOy1Rd9F1tz7QuXoOODGV7uH0KaFuk2IGNWerWX_1-XRihT7h4Lbqv1i6IfH3VSmswBhGZwYJWp88PxxcV3Q2lmitAAaaDoXKRp_M"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-on-surface">
                      Sarah Chen updated Project Apollo
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      12m ago
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    The architectural mockups for the Zurich residence have been
                    finalized and uploaded to the travel itinerary folder.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    smart_toy
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-on-surface">
                      AI Assistant Insight
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      2h ago
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Based on your recent search history, I've curated a premium
                    list of concept stores in Zurich's Old Town for your
                    upcoming trip.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                      Travel
                    </span>
                    <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                      Shopping
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    alt="Activity contributor"
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a male designer with glasses and a thoughtful expression in a bright modern workspace"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-dij1nJfzeP3Wl49LO7nmM_VZbthPcehKhaE09SrKRwv-xB3rcdoVHScwsybm-25A1NrxNLUha5__OP_6ZC9c4G9Y3P_oPxmjcy_7mevffh8rWmZzXtxbXHiBTeAgzXOZ9h5PG5z-oNR7wLZ3Dl2-8EFQgSqMFbAN9TgspW5iZSb9hjOLWPnT_6JvyUJBscVH5csaX0Z5pSx0lUgnYsUuB8uU5fe-LSMTsFmRttGk2M88uDqKI6KufqfWYcbUKIQjK3VF0O56Ho"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-on-surface">
                      Marcus Thorne sent a voice note
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      5h ago
                    </span>
                  </div>
                  <div className="mt-2 bg-surface-container-low p-4 rounded-xl flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        play_arrow
                      </span>
                    </button>
                    <div className="flex-1 h-1 bg-slate-200 rounded-full relative">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">
                      0:42
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Small Side Bento Items --> */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* <!-- Trip Preview --> */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
              <div className="h-32 bg-slate-200 relative">
                <img
                  alt="Zurich Cityscape"
                  className="w-full h-full object-cover"
                  data-alt="stunning wide angle view of zurich switzerland with clear blue water and historic architecture during a bright crisp morning"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqW271hZQfdKyUNdLcrB0BGvb2ksdWvy1hv3X8CDSSnVS6o5SJfxk8_rKUwDJ_80K5gVmZBcUiVaK3rjf-Qlm4tMbVqYDAu8I9i5WN-i2nSblzqqPJpS5sEefCLt-tck9nUkEM2qsfF_ENlTHVGmOruK0-D4qrvF1s21L9xZ_VJ6oCrgnP3PeJPd6I7_YwoyXSwe-NqrXgJxLI_X5b_awc80AIMTDabl_seUCxBPhVIojKug-k97lHOf-WNKtOLkMLKEDZBmxVBJ4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                    Next Destination
                  </div>
                  <div className="text-lg font-bold">Zurich, CH</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-on-surface-variant">
                    May 12 - May 16
                  </span>
                  <span className="text-xs font-bold text-primary">
                    Confirmed
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Staying at The Widder Hotel. 3 meetings scheduled.
                </p>
                <button className="w-full py-2 bg-surface-container-high rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                  Full Itinerary
                </button>
              </div>
            </div>
            {/* <!-- Active Cart --> */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Store Selection
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-600">
                      headset
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">Spatial Audio Pro</div>
                    <div className="text-[10px] text-slate-500">$549.00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-600">
                      auto_stories
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">
                      Bauhaus: Updated Ed.
                    </div>
                    <div className="text-[10px] text-slate-500">$120.00</div>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-surface-container" />
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">Total</span>
                <span className="text-sm font-bold text-primary">$669.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- FAB (Suppressed on Dashboard as per rules if needed, but relevant here for "OS" feeling) --> */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">smart_toy</span>
      </button>
    </>
  );
}
