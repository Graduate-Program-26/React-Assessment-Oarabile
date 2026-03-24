"use client";
import { useRouter } from "next/navigation";
import useStore from "../store/store";

export default function Home() {
  const router = useRouter();
  const setSearch = useStore((state) => state.setSearchInput);
  const Search = useStore((state) => state.searchInput);
  return (
    <div className="">
      <main className="">
        <h1>Welcome Interviewer!</h1>
        <div>
          <article>Please search a user</article>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter User name"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              if (Search) {
                router.push(`/profile/${Search}`);
              } else {
                //for now
                alert("no user name was entered");
              }
            }}
          >
            Search
          </button>
        </div>
      </main>
    </div>
  );
}
