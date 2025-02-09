import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { Edit, Trash } from "lucide-react";
import { deleteChat } from "./store/chatsSlice";

export default function ChatOptions() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedChatId = useSelector<RootState>(
    (store) => store.chats.selectedChat
  ) as string;
  return (
    <div className="bg-gray-50 absolute right-4 top-16 w-44 p-4 rounded-lg shadow-lg">
      <div>
        <ul>
          <li className="grid grid-cols-2 hover:text-yellow-500 transition-colors hover:cursor-pointer">
            <span className="text-lg">Edit</span>
            <span className="justify-self-end">
              <Edit />
            </span>
          </li>
          <li
            className="grid grid-cols-2 hover:text-red-500 transition-colors "
            onClick={() => dispatch(deleteChat(selectedChatId))}
          >
            <span className="text-lg">Delete</span>
            <span className="justify-self-end">
              <Trash />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
