export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
              <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
              <div className="mt-3 h-8 w-56 animate-pulse rounded-full bg-slate-200" />
            </div>
            <div className="h-10 w-24 animate-pulse rounded-full bg-slate-100" />
          </div>

          <div className="space-y-4 p-6">
            <div className="h-28 animate-pulse rounded-2xl bg-slate-100" />
            <div className="h-28 animate-pulse rounded-2xl bg-slate-100" />
            <div className="h-28 animate-pulse rounded-2xl bg-slate-100" />
          </div>
        </div>

        <p className="text-sm font-medium text-slate-500">Loading feed...</p>
      </div>
    </main>
  );
}