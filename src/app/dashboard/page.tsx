import { auth } from "@/src/lib/auth"
import { githubEvents, githubRepo, githubUser } from "@/src/lib/github";
import { notFound } from "next/navigation";
import Image from "next/image";
import { User, Event, UserRepo } from "@/src/types/types";

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
            <div>
                <div>{userData.login}</div>
                <Image src={userData.avatar_url} alt="profile picture"/>
                <div>
                    {userRepo.map((item) => (
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
                    {userEvents.map((item) => (
                        <div key={item.id}>
                            <div>{item.type}</div>
                            <div>{item.repo.name}</div>
                            <div>{item.created_at}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <Image src={`https://ghchart.rshah.org/${userData.login}`} alt="GitHub contribution calendar" />
                </div>
            </div>
        </main>
    )
}