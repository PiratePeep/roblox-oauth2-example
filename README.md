# Roblox OAuth 2.0 Next.JS Example

Simple working implementation of Roblox's OAuth 2.0 API.

## Features

- Authentication with [Lucia](https://lucia-auth.com/)
- Dark and light themes
- Simple home page
- Database preconfigured
- Basic animations
## Previews

### Dark mode
![](https://i.imgur.com/BeZp8tj.png)

### Light mode
![](https://i.imgur.com/zwX4qTj.png)

## Getting Started

Before running the server, you'll need to [Register an OAuth 2.0 Application](https://create.roblox.com/docs/cloud/open-cloud/oauth2-registration) and add the ``http://localhost:3000/login/roblox/callback``to your list of allowed redirects. You may need to change this if you are running it on a different port or domain.

Once you have your application created, you'll need to install the application dependencies:

```bash
npm i

# or

yarn install

# or

pnpm i

# or

bun install
```

  
Then, run the server:
```bash
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
```

Go to [http://localhost:3000](http://localhost:3000) in your browser and you should see the site running.

### Useful links

- [Shadcn UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Next Themes](https://github.com/pacocoursey/next-themes)
- [Oslo](https://oslo.js.org/)
- [Lucia Auth](https://lucia-auth.com/)
- [Prisma](https://www.prisma.io/)
- [Shiki (Syntax Highlighter)](https://shiki.matsu.io/)
- [Next.js Documentation](https://nextjs.org/docs)
