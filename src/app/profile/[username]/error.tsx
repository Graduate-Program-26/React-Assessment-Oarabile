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
  );
}
