import { oauth2Client, lucia, getUserInfo } from "@/lib/auth";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Invalid request", { status: 400 });
  }

  try {
    // Validate the authorization code
    const { access_token } = await oauth2Client.validateAuthorizationCode(
      code,
      {
        credentials: process.env.CLIENT_SECRET,
        authenticateWith: "request_body",
      }
    );

    // Get the user info from the access token
    const userInfo = await getUserInfo(access_token);

    // Create or update the user in the database
    // We only update the username, picture, and nickname because the other fields never change
    const user = await prisma.user.upsert({
      where: { id: userInfo.sub },
      update: {
        username: userInfo.preferred_username,
        picture: userInfo.picture,
        nickname: userInfo.nickname,
      },
      create: {
        id: userInfo.sub,
        username: userInfo.preferred_username,
        nickname: userInfo.nickname,
        createdAt: userInfo.created_at,
        picture: userInfo.picture,
        profile: userInfo.profile,
      },
    });

    // Create a session for the user
    // This saves the session in the database and returns the session object
    // You could configure additional session attributes here such as ip address, user agent, etc.
    const session = await lucia.createSession(user.id, {});

    // Set the session cookie
    // This will be used to authenticate the user in future requests
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return Response.redirect(new URL("/home", request.url), 302);
  } catch (error) {
    return new Response("An error occurred", { status: 500 });
  }
}
