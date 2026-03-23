export interface User{
    login: string;
    avatar_url: string;
    followers: number; 
    following: number; 
    company: string | null;
    blog: string|null;
    hireable: boolean | null ;
    created_at: string;
    updated_at: string; 
    name: string |null;
    bio: string | null;
    html_url: string;
    public_repos: number;
}

export interface UserRepo{
    id: number;
    name: string;
    private: boolean;
    owner: User;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    updated_at: string; 
    html_url: string;
}

interface Actor{
    id: number;
    login: string;
    displayLogin: string;
}

interface Repo{
    name: string;
    url: string;
}

export interface Event{
    type: string;
    actor: Actor;
    repo:  Repo;
    created_at: string;
}