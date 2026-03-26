import { SignIn } from "@/src/components/auth/sign-in-button"


export default async function Page(){
    return(
        <main>
            <div className="flex flex-col items-center justify-center h-screen">
                <div>
                    <h2 className="text-3xl font-extrabold "><span className="text-[#90CAF9]">Welcome User</span></h2>
                    <h2 className="text-2xl font-extrabold flex justify-center mt-[5%]">Please Sign in!</h2>
                </div>
                <div>
                    <img
                    src="/No-data-rafiki.svg"
                    className="w-64 md:w-96 lg:w-[500px]"
                    alt="page has not been found"
                    />
                </div>
                <div>
                    <SignIn />
                </div>
            </div>
        </main>
    )
}