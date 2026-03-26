import { Event, User, UserList, UserRepo } from "@/src/types/types";

export default function Card({ data }: { data: Event[] }) {
  return (
    <div className="card w-96 bg-base-100 shadow-sm border-[#90CAF9]/50">
      <div className="card-body">
        <span className="badge badge-xs bg-[#90CAF9]">All Events</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Events List</h2>
          <span className="text-xl">{data.length}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {data.map((item) => (
            <li key={item.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item.type}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block bg-[#90CAF9] border-[#90CAF9]">
            See Events
          </button>
        </div>
      </div>
    </div>
  );
}

export function MiniCards({ data }: { data: UserRepo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 h-[65%]">
      {data.map((item) => (
        <div
          className="stats shadow-sm border border-[#90CAF9] bg-base-100"
          key={item.id}
        >
          <div className="stat">
            <div className="stat-title text-xs flex justify-between items-center">
              <span>Rating: {item.stargazers_count}</span>
              <div className="badge badge-outline badge-xs text-[#90CAF9]">
                Public
              </div>
            </div>
            <div className="stat-value text-lg truncate text-[#90CAF9]">
              {item.name}
            </div>
            <div className="stat-desc font-medium">
              Language:{" "}
              <span className="text-base-content">
                {item.language || "Plain Text"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function UserListCard({data}: {data:User[]}){
    return(
        <div className="flex flex-wrap gap-[2%]">
           {data.map((items) => (
                <div className="card bg-base-100 w-96 shadow-sm" key={items.id}>
                    <figure>
                        <img
                        src={items.avatar_url}
                        alt={items.login} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {items.login}
                            <div className="badge badge-secondary">Repos: {items.public_repos}</div>
                        </h2>
                        <p>{(items.bio) ? (items.bio) : (items.login) + " has no bio"}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Last updated: {items.updated_at}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function AvatarImage({ image }: { image: string }) {
  return (
    <div className="avatar mt-[4%] mb-[4%] ml-[5%]">
      <div className="w-65 rounded-full ring-[#90CAF9] ring-offset-base-100 ring-2 ring-offset-2">
        <img src={image} alt="profile picture" />
      </div>
    </div>
  );
}
