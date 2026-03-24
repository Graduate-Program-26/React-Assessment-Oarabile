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
        <div className="flex items-center justify-center mt-[5%]">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-[#90CAF9]">Welcome Interviewer!</h1>
              <p className="py-6 text-xl opacity-80">Search for a GitHub user to view their professional <br />profile and repository stats.</p>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter User name"
                value={Search}
                className="input input-bordered focus:outline-[#90CAF9]"
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
                className="btn btn-primary bg-[#90CAF9] border-[#90CAF9] hover:bg-[#74b9ef] hover:border-[#74b9ef] ml-[2%]"
              >
                Search
              </button>
            </div>
          </div>
          

          <div>
            <img src="/Online resume-cuate.svg" className="w-64 md:w-96 lg:w-[600px]" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
