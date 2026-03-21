import { Event, User, UserRepo } from "../types/types";
import token

export async function githubUser(username: string): Promise<User>{
    const data = await fetch(`https://api.github.com/users/${username}`,{
        headers: {
            Authorization : `Bearer ${token}`
        }
    });
    const res : User = await data.json();
    return res;
}

export async function githubRepo(username: string): Promise<UserRepo[]>{
    const data = await fetch(`https://api.github.com/users/${username}/repos`)
    const res : UserRepo[] = await data.json();
    
    //6 repos only
    const array = res.sort((a,b) => {
        const aDate = new Date(a.updated_at).getTime();
        const bDate = new Date(b.updated_at).getTime();

        return (bDate - aDate)
    })
    .slice(0,6);
    return array;
}

export async function githubEvents(username: string): Promise<Event[]>{
    const data = await fetch(`https://api.github.com/users/${username}/events/public`)
    const res : Event[] = await data.json();
    return res;
}