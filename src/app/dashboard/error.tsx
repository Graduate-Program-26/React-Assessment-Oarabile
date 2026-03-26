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
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-[5%]">
            <h2 className="text-3xl font-extrabold">Something went wrong!</h2>
            <img
                src="/Thinking face-rafiki.svg"
                className="w-64 md:w-96 lg:w-[500px]"
                alt="page has not been found"
            />
        </div>
        <button 
            className="btn btn-soft bg-[#90CAF9]"
            onClick={() => reset()}
        >
            Try again
        </button>
    </div>
  );
}
