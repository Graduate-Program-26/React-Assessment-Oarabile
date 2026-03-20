export interface User{
    login: string;
    avatarUrl: string;
    followers: number; // api str
    following: number; //api
    organizations: string; //api
    repos: string; //api
    events: string; //api
    recieved_events: string; //api
    company: string;
    blog: string;
    hireable: string;
    createdAt: string;
    updatedAt: string; 
}

export interface UserRepo{
    name: string;
    private: boolean;
    owner: User;
    description: string;
    commits: string; //api
    merges: string; //api
    pulls: string;
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
    createdAt: string;
}