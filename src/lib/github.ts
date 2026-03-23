import { Event, User, UserRepo } from "../types/types";

export async function githubUser(username: string | null | undefined, token? : string): Promise<User>{
    try{
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}`} : {};
        const data = await fetch(`https://api.github.com/users/${username}`,{ headers});
        const res: User = await data.json();
        return res;
    }catch(error){
        throw new Error(`Failed to fetch: ${error}}`);
    }   
}

export async function githubRepo(username: string | null | undefined, token? : string): Promise<UserRepo[]>{
    try{
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
    catch(error){
        throw new Error(`Failed to fetch: ${error}}`);
    }
}

export async function githubEvents(username: string | null | undefined, token? : string): Promise<Event[]>{
    try{
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}`} : {};
        const data = await fetch(`https://api.github.com/users/${username}/events/public`, {headers});
        const res : Event[] = await data.json();
        return res.slice(0,6);
    }catch(error){
        throw new Error(`Failed to fetch: ${error}}`);
    }
}