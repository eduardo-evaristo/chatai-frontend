import { Settings2 } from "lucide-react";
import { Chat } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { selectChat } from "./store/chatsSlice";
import ChatOptions from "./ChatOptions";

type props = { data: Chat };

export default function ChatItem({ data }: props) {
  //const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);
  const isSelected: boolean =
    useSelector<RootState>((store) => store.chats.selectedChat) === data.id;
  const dispatch = useDispatch();

  return (
    <div className="bg-pink-300 w-auto h-52 py-10 px-9 rounded-sm relative flex items-center shadow-md">
      <Settings2
        className={`${
          isSelected ? "text-gray-50" : ""
        } absolute top-6 right-5 hover:text-gray-50 transition-colors`}
        onClick={() => dispatch(selectChat(data.id))}
      />
      {isSelected && <ChatOptions />}
      <div className="flex flex-col">
        <span className="font-extrabold text-2xl">{data.name}</span>
        <div className="border-[0.5px] w-full my-2 "></div>
        <span className="font-semibold text-sm">Created at:</span>
        <span className="font-semibold text-sm">No of questions:</span>
      </div>
    </div>
  );
}
