import { Settings2 } from "lucide-react";
import { Chat } from "./types";

type props = { data: Chat };

export default function ChatItem({ data }: props) {
  return (
    <div className="bg-pink-300 w-auto h-52 py-10 px-9 rounded-sm relative flex items-center shadow-md">
      <Settings2
        className="absolute top-5 right-5 hover:text-gray-50 transition-colors"
        onClick={() => console.log("yeah, totally been clicked")}
      />
      <div className="flex flex-col">
        <span className="font-extrabold text-2xl">{data.name}</span>
        <div className="border-[0.5px] w-full my-2 "></div>
        <span className="font-semibold text-sm">Created at:</span>
        <span className="font-semibold text-sm">No of questions:</span>
      </div>
    </div>
  );
}
