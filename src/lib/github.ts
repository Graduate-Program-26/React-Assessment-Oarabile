import { Event, User, UserRepo } from "../types/types";

export async function githubUser(username: string, token? : string): Promise<User>{
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}`} : {};
    const data = await fetch(`https://api.github.com/users/${username}`,{ headers});
    const res : User = await data.json();
    return res;
}

export async function githubRepo(username: string, token? : string): Promise<UserRepo[]>{
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}`} : {};
    const data = await fetch(`https://api.github.com/users/${username}/repos`, {headers})
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

export async function githubEvents(username: string, token? : string): Promise<Event[]>{
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}`} : {};
    const data = await fetch(`https://api.github.com/users/${username}/events/public`, {headers});
    const res : Event[] = await data.json();
    return res;
}