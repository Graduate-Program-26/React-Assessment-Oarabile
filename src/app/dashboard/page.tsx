import { auth } from "@/src/lib/auth"
import { githubEvents, githubRepo, githubUser } from "@/src/lib/github";
import { notFound } from "next/navigation";

export default async function Page(){
    try{
        const session = await auth();
        const userData = await githubUser(session?.user?.name, session?.accessToken);
        const userEvents = await githubEvents(session?.user?.name, session?.accessToken);
        const UserRepo = await githubRepo(session?.user?.name, session?.accessToken);
        return(
            <main>
                <div>
                    <div>{userData.login}</div>
                    <img src={userData.avatar_url} alt="profile picture" />
                    <div>
                        {UserRepo.map((item) => (
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
                </div>
            </main>
        )
    }catch{
        notFound();
    }
}