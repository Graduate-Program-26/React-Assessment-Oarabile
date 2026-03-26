# gitDash

gitDash is a modern GitHub dashboard application built with **Next.js**, **TypeScript**, and **Zustand**. It allows users to search for GitHub users and view their repositories and activity, with optional login via **GitHub OAuth** for enhanced features.

You can try it live here: [https://react-assessment-oarabile.vercel.app/](https://react-assessment-oarabile.vercel.app/)

---

## Features

- **Search GitHub Users:** Find any GitHub user and view their public repositories and activity, even when logged out.  
- **OAuth Authentication:** Log in and out using GitHub OAuth for personalized sessions.  
- **Dynamic Routing:** Routes automatically generate based on users and repositories.  
- **Error Handling:** Friendly error pages when fetching fails.  
- **Loading States:** Visual indicators when data is being fetched.  
- **Styled with DaisyUI:** Modern UI components and themes for a clean interface.  
- **Environment Variables:** Sensitive data managed via `.env.local`.  

---

## Tech Stack

- [Next.js](https://nextjs.org/docs/app/getting-started/project-structure) – React framework for server-rendered apps and API routes.  
- [TypeScript](https://typescript-eslint.io/rules/no-explicit-any) – Strongly typed JavaScript.  
- [Zustand](https://github.com/pmndrs/zustand) – Lightweight state management.  
- [Auth.js (GitHub OAuth)](https://authjs.dev/getting-started/providers/github) – Authentication provider.  
- [DaisyUI](https://daisyui.com/) – TailwindCSS component library for styling.  

---

## Authentication & Session Management

- Log in and out via GitHub OAuth.  
- Session data is stored and managed using Auth.js.  
- Users can view public GitHub information even without logging in.  
- Protected routes can be implemented via middleware for authenticated-only pages.  

Learn more:  
- [Auth.js Login & Logout](https://authjs.dev/getting-started/session-management/login)  
- [Retrieve Session in App Router](https://authjs.dev/getting-started/session-management/get-session#retrieving-the-session-in-app-router)  
- [Protect Routes](https://authjs.dev/getting-started/session-management/protecting)  
- [Extending the Session](https://authjs.dev/guides/extending-the-session)  

---

## GitHub API Integration

gitDash uses the GitHub REST API to fetch user data, repositories, and public events.  

- [Get a User](https://docs.github.com/en/rest/users/users#get-a-user)  
- [List Repositories for a User](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user)  
- [List Public Events for a User](https://docs.github.com/en/rest/activity/events#list-public-events-for-a-user)  
- [Creating a GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)  

Data fetching is handled efficiently with loading states and error catching to provide a smooth user experience.  

---

## Next.js Features Used

- [Routing & Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing)  
- [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)  
- [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)  
- [Not Found Page](https://nextjs.org/docs/app/api-reference/functions/not-found)  
- [Protecting Routes with Middleware](https://nextjs.org/docs/app/building-your-application/authentication#protecting-routes-with-middleware)  

---

## Additional Resources

- [Auth.js GitHub Provider Setup](https://authjs.dev/getting-started/providers/github)  
- [Auth.js TypeScript Setup](https://authjs.dev/getting-started/typescript)  
- [Next.js Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)  
- [Array.sort Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  

---

## License

![alt text](<Screenshot 2026-03-26 at 17.40.39.png>) 
![alt text](<Screenshot 2026-03-26 at 17.40.47.png>) 
![alt text](<Screenshot 2026-03-26 at 17.41.00.png>)
![alt text](<Screenshot 2026-03-26 at 17.47.57.png>)

MIT License © 2026 Oarabile Mbewe