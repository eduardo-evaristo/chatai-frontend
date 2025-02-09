import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChatHeader() {
  return (
    <header className="bg-pink-700 flex items-center justify-between p-4">
      <Link to="/chats">
        <ArrowLeft className="hover:text-gray-200" />
      </Link>
    </header>
  );
}
