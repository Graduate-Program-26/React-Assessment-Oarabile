import { githubEvents, githubRepo, githubUser } from "@/src/lib/github"

export default async function Page({params}: {params : Promise<{username: string}>}){
    const {username} = await params;
    const gitUser = await githubUser(username);
    const gitRepo = await githubRepo(username);
    const gitEvents = await githubEvents(username);
    return(
        <div>
            <div>{gitUser.login}</div>
            <img src={gitUser.avatar_url} alt="profile picture" />
            <div>
                {gitRepo.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{ (item.description) ? (item.description): "No description"}</p>
                        <div>
                            {item.stargazers_count}
                        </div>
                        <div>
                            {item.language}
                        </div>
                        <div>
                            {item.updated_at}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {gitEvents.map((item)=>(
                    <div>
                        <div>{item.type}</div>
                        <div>{item.repo.name}</div>
                        <div>{item.created_at}</div>
                    </div>
                ))}
            </div>

        </div>
    );    
}