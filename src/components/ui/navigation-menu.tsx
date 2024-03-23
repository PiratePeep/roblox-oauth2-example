import { Sparkles, ChevronDown } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <div className="py-8 w-full px-10">
      <nav className="flex items-center gap-x-10">
        <Link href={"/"}>
          <div className="flex items-center gap-x-4">
            <Sparkles size={32} />
            <h1 className="text-2xl font-bold">OAuth2 Example</h1>
          </div>
        </Link>

        <ModeToggle className="flex items-center ml-auto" />
      </nav>
    </div>
  );
}
