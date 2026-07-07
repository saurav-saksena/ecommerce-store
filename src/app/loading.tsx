export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <section className="mb-8">
        <div className="h-10 w-56 animate-pulse rounded bg-gray-200" />

        <div className="mt-3 h-5 w-80 animate-pulse rounded bg-gray-200" />
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="h-64 animate-pulse bg-gray-200" />

            <div className="space-y-3 p-4">
              <div className="h-5 animate-pulse rounded bg-gray-200" />

              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />

              <div className="h-8 w-24 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}