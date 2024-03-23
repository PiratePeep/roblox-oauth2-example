import Code from "@/components/ui/code";

export default function DataExample() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-24 px-12 lg:px-24 gap-12">
      <div className="col-span-1 my-auto">
        <h1 className="text-6xl font-bold">See The Data</h1>

        <p className="mt-8 text-xl">
          See what data Roblox returns when you sign in. This will be useful for
          you to understand what data you can use in your application.
        </p>
      </div>
      <div className="col-span-1 bg-purple-400 dark:bg-violet-500 rounded-lg lg:px-8 relative overflow-clip flex justify-center items-center">
        <div className="absolute bg-purple-300 dark:bg-violet-400 inset-x-0 top-[50%] skew-y-[13deg] h-[150%] -z-0"></div>

        <Code
          className="w-[90%] overflow-x-scroll"
          lang="json"
          code={`{
  "sub": "1234567890",
  "name": "John Doe",
  "nickname": "JD",
  "preferred_username": "john_doe123",
  "created_at": 1647714469901,
  "profile": "https://www.roblox.com/...",
  "picture": "https://tr.rbxcdn.com/..."
}`}
        />
      </div>
    </div>
  );
}
