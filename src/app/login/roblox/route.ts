import { oauth2Client } from "@/lib/auth";

export async function GET(): Promise<Response> {
  // Create the authorization URL
  // This will redirect the user to the Roblox login page to authorize the app
  // The user will be redirected back to the callback URL after authorizing the app
  // You could add additional scopes here for additional permissions but you must update 
  // the allowed scopes in the creator dashboard
  const url = await oauth2Client.createAuthorizationURL({
    scopes: ["openid", "profile"], // These scopes are just for getting the user's profile
  });

  return Response.redirect(url);
}
