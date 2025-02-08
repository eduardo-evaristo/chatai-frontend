import { UserRound } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-pink-700 flex items-center justify-between p-4">
      <Logo />
      <input
        className="bg-gray-300 rounded-lg px-5 py-2 focus:outline-none w-60 md:w-max focus:ring-4 focus:ring-gray-50 focus:ring-offset-2 transition-all"
        placeholder="Search your chats"
      ></input>
      <UserRound />
    </header>
  );
}
