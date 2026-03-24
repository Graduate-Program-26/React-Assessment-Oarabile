"use client";
import { useEffect } from "react";

//https://authjs.dev/getting-started/session-management/get-session
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img
          src="/Thinking face-rafiki.svg"
          className="w-64 md:w-96 lg:w-[500px]"
          alt="page has not been found"
        />
      </div>
      <div>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by re-fetching and re-rendering the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
