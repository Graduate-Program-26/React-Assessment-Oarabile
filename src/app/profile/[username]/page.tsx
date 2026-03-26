import { githubEvents, githubRepo, githubUser } from "@/src/lib/github";
import { UserRepo, User, Event } from "@/src/types/types";
import { auth } from "@/src/lib/auth";
import { notFound } from "next/navigation";
import {AvatarImage, MiniCards} from "@/src/components/layout/card";
import Card from "@/src/components/layout/card";
import Stats from "@/src/components/layout/stats";

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
      <div className="flex flex-wrap justify-center items-center">
        <AvatarImage image={gitUser.avatar_url} />
        <div className="ml-0 sm:ml-[3%] flex flex-col items-center sm:items-start mt-4 sm:mt-0">
          <h1 className="text-5xl font-extrabold tracking-tight text-base-content mb-[4%]">{gitUser.login}</h1>
          <div className="scale-55 sm:scale-105">
            <Stats data={gitUser}/>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col sm:flex-row items-center">
        <div className="mr-[2%] sm:ml-[2%] sm:mt-0 mt-[5%]">
          <Card data={gitEvents}/>
        </div>
        <div className="sm:mt-0 mt-[5%]">
          <h3 className="text-2xl font-extrabold">Repositories</h3>
          <MiniCards data={gitRepo}/>
        </div>
      </div>
      <div className="mb-[2%]">
        <h3 className=" ml-[18%] text-3xl font-extrabold m-[1.8%]">Chart</h3>
        <div className="flex justify-center w-full overflow-x-auto sm:overflow-visible">
          <img 
          src={`https://ghchart.rshah.org/90CAF9/${gitUser.login}`} 
          alt="GitHub contribution calendar"
          className="w-full sm:w-5xl" 
          />
        </div>
      </div>
    </div>
  );
}
