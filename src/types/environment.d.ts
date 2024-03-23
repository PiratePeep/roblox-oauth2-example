declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      REDIRECT_URI?: string;
      CLIENT_ID?: string;
      CLIENT_SECRET?: string;
      DATABASE_URL?: string;
    }
  }
}

export {}