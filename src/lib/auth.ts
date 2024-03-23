import { config } from "dotenv";
import { Lucia } from "lucia";
import { OAuth2Client } from "oslo/oauth2";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { cache } from "react";
import { cookies } from "next/headers";

import type { Session, User } from "lucia";

config();

const AUTHORIZE_ENDPOINT = "https://apis.roblox.com/oauth/v1/authorize";
const TOKEN_ENDPOINT = "https://apis.roblox.com/oauth/v1/token";
const USERINFO_ENDPOINT = "https://apis.roblox.com/oauth/v1/userinfo";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const oauth2Client = new OAuth2Client(
  process.env.CLIENT_ID as string,
  AUTHORIZE_ENDPOINT,
  TOKEN_ENDPOINT,
  {
    redirectURI: process.env.REDIRECT_URI as string,
  }
);

export const getUserInfo = async (
  accessToken: string
): Promise<RobloxProfile> => {
  const response = await fetch(USERINFO_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    name: "session",
    expires: false,
    attributes: {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
      nickname: attributes.nickname,
      createdAt: attributes.createdAt,
      profile: attributes.profile,
      picture: attributes.picture,
    };
  },
});

export const validateRequest = cache(
	async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
		const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
		if (!sessionId) {
			return {
				user: null,
				session: null
			};
		}

		const result = await lucia.validateSession(sessionId);
		// next.js throws when you attempt to set cookie when rendering page
		try {
			if (result.session && result.session.fresh) {
				const sessionCookie = lucia.createSessionCookie(result.session.id);
				cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
			if (!result.session) {
				const sessionCookie = lucia.createBlankSessionCookie();
				cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
		} catch {}
    
		return result;
	}
);


declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }

  interface DatabaseUserAttributes {
    username: string;
    nickname: string;
    createdAt: number;
    profile: string;
    picture: string;
  }
}

export interface RobloxProfile extends Record<string, any> {
  /** Roblox user ID. */
  sub: string;
  /** Roblox display name. */
  name: string;
  /** Roblox display name. */
  nickname: string;
  /** Roblox username. */
  preferred_username: string;
  /** Creation timestamp of the Roblox account. */
  created_at: number;
  /** Roblox account profile URL. */
  profile: string;
  /** Roblox account profile image URL. */
  picture: string;
}
