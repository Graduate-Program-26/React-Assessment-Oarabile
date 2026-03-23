import { githubUser } from "@/src/lib/github"

export default async function Page({params}: {params : Promise<{username: string}>}){
    const {username} = await params;
    const res = await githubUser(username);
    return(
        <div>
            <div>{res.login}</div>
            <img src={res.avatar_url} alt="profile picture" />
        </div>
    )    
}