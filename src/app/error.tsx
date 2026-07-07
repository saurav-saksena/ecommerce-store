"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-4 text-gray-600">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Try Again
      </button>
    </main>
  );
}