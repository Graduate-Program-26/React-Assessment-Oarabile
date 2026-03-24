import { githubEvents, githubRepo, githubUser } from "@/src/lib/github";
import { UserRepo, User, Event } from "@/src/types/types";
import { auth } from "@/src/lib/auth";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  let gitUser: User;
  let gitRepo: UserRepo[];
  let gitEvents: Event[];
  
  try {
    const { username } = await params;
    const session = await auth();
    gitUser = await githubUser(username, session?.accessToken);
    gitRepo = await githubRepo(username, session?.accessToken);
    gitEvents = await githubEvents(username, session?.accessToken);
  } catch {
    notFound();
  }

  return (
    <div>
      <div>{gitUser.login}</div>
      <img src={gitUser.avatar_url} alt="profile picture" />
      <div>
        {gitRepo.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description ? item.description : "No description"}</p>
            <div>{item.stargazers_count}</div>
            <div>{item.language}</div>
            <div>{item.updated_at}</div>
          </div>
        ))}
      </div>
      <div>
        {gitEvents.map((item) => (
          <div key={item.id}>
            <div>{item.type}</div>
            <div>{item.repo.name}</div>
            <div>{item.created_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
