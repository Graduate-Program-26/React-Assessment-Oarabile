import { auth } from "@/src/lib/auth"
import { githubEvents, githubRepo, githubUser } from "@/src/lib/github";
import { notFound } from "next/navigation";
import { User, Event, UserRepo } from "@/src/types/types";
import Card, { AvatarImage, MiniCards } from "@/src/components/layout/card";
import Stats from "@/src/components/layout/stats";

export default async function Page(){
    let userData : User;
    let userEvents : Event[]; 
    let userRepo: UserRepo [];

    try{
        const session = await auth();
        userData = await githubUser(session?.user?.name, session?.accessToken);
        userEvents = await githubEvents(session?.user?.name, session?.accessToken);
        userRepo = await githubRepo(session?.user?.name, session?.accessToken);
    }catch{
        notFound();
    }

    return(
        <main>
            <div className="flex justify-center items-center">
                <AvatarImage image={userData.avatar_url} />
                <div className="ml-[3%]">
                    <h1 className="text-5xl font-extrabold tracking-tight text-base-content mb-[4%]">{userData.login}</h1>
                    <Stats data={userData}/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mr-[2%]">
                    <Card data={userEvents}/>
                </div>
                <div>
                    <h3 className="text-2xl font-extrabold">Repositories</h3>
                    <MiniCards data={userRepo}/>
                </div>
            </div>
            <div className="mb-[2%]">
                <h3 className=" ml-[18%] text-3xl font-extrabold m-[1.8%]">Chart</h3>
                <div className="flex justify-center">
                    <img 
                    src={`https://ghchart.rshah.org/90CAF9/${userData.login}`} 
                    alt="GitHub contribution calendar"
                    className="w-5xl " 
                    />
                </div>
            </div>
        </main>
    )
}