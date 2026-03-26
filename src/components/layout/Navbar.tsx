import { auth } from "@/src/lib/auth";
import { SignOut } from "../auth/sign-out-button";

export default async function Navbar() {
    const session = await auth();
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {" "}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />{" "}
                    </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard">dashboard</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <img
                src="https://cdn-icons-png.flaticon.com/128/536/536452.png"
                alt="github Icon"
                className="h-12"
                />
                <a className="btn btn-ghost text-xl ml-[-15] font-bold">GitDash</a>
            </div>
            <div className="navbar-end">
                <label className="toggle text-base-content mr-[3%]">
                    <input type="checkbox" value="synthwave" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                </label>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={(session?.user?.image) ? (session?.user?.image) : ("https://cdn-icons-png.flaticon.com/128/3135/3135768.png")} 
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {(session?.user?.image) ? (
                            <div>
                                <li>
                                    <a className="justify-between" href="/dashboard">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <SignOut />
                                </li>
                            </div>
                            
                        ): (
                            <a className="justify-between" href="/login">
                                Login
                            </a>
                        )}
                    </ul>
                </div>
        
            </div>
        </div>
    );
}
