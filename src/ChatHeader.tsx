import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "./store/store";
import { setCurrentChat } from "./store/chatsSlice";

export default function ChatHeader() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <header className="bg-pink-700 flex items-center justify-between p-4">
      <Link to="/chats">
        <ArrowLeft
          className="hover:text-gray-200"
          onClick={() => dispatch(setCurrentChat(null))}
        />
      </Link>
    </header>
  );
}
