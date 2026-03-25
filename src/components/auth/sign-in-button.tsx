import { signIn } from "@/src/lib/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className="btn btn-soft bg-[#90CAF9]">Sign in with github</button>
    </form>
  );
}
