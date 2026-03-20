export interface user {
    login: string;
    avatarUrl: string;
    followers: string; // api str
    following: string; //api
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

export interface userRepo{
    name: string;
    private: boolean;
    owner: user;
    description: string;
    commits: string; //api
    merges: string; //api
    pulls: string;
}

interface actor{
    id: number;
    login: string;
    displayLogin: string;
}

interface repo{
    name: string;
    url: string;
}

export interface event{
    type: string;
    actor: actor;
    repo:  repo;
    createdAt: string;
}