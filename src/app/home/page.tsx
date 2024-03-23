import { validateRequest } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Code from "@/components/ui/code";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ActionResult } from "next/dist/server/app-render/types";
import Link from "next/link";

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();

  if (!session) {
    return redirect("/");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/");
}

export default async function Home() {
  const { user } = await validateRequest();

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full px-12 py-28">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 p-8 bg-primary-foreground rounded-lg">
          <div className="flex items-center">
            <Avatar className="rounded-full w-28 h-28">
              <AvatarImage
                src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1272B0338FE4062B0826569D88DDCD8F-Png/150/150/AvatarHeadshot/Png/noFilter"
                alt={user.username}
              />
              <AvatarFallback>
                {user.username?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col md:mr-auto gap-y-2 justify-center items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold">Welcome, {user.username}!</h1>
            <p className="text-lg">You are logged in with Roblox OAuth2.</p>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <Link href={user.profile}>
              <button className="px-6 py-2 bg-primary text-secondary font-medium rounded-xl shadow-lg border-2 border-primary-foreground whitespace-nowrap">
                Profile
              </button>
            </Link>
            <form action={logout}>
              <button className="px-6 py-2 bg-primary text-secondary font-medium rounded-xl shadow-lg border-2 border-primary-foreground whitespace-nowrap">
                Log out
              </button>
            </form>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mr-auto pt-6">Your data:</h2>

        <Code
          className="w-full overflow-x-scroll !pt-4"
          lang="json"
          code={
            JSON.stringify(
              {
                sub: user.id,
                name: user.username,
                nickname: user.nickname,
                preferred_username: user.username,
                created_at: user.createdAt,
                profile: user.profile,
                picture: user.picture,
              },
              null,
              2
            ) || `{}`
          }
        />
      </div>
    </>
  );
}
