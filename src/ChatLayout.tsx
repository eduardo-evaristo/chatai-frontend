import { SendHorizontal } from "lucide-react";
import { forwardRef, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { sendQuestion } from "./store/chatsSlice";

export default function ChatLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-indigo-950">
      <ChatHeader />
      <div className="flex flex-col gap-4 py-4 overflow-auto">
        <Outlet />
      </div>
      <TextAreaFooter />
    </div>
  );
}

const TextArea = forwardRef<HTMLTextAreaElement>(function TextArea(
  _props,
  ref
) {
  //const [input, setInput] = useState<string>("");

  return (
    <textarea
      ref={ref}
      className="rounded-2xl bg-gray-200 w-full p-4 resize-none focus:ring-4 focus:ring-gray-50 focus:ring-offset-2 focus:outline-none "
    ></textarea>
  );
});

export function ChatBalloon({
  content,
  user,
}: {
  content: string;
  user: boolean;
}) {
  return (
    <div className={`flex ${user ? "flex-row-reverse pr-4" : "pl-4"} w-screen`}>
      <div
        className={`max-w-60 bg-amber-50 rounded-xl p-2 text-wrap break-words`}
      >
        <span className="text-lg">{content}</span>
      </div>
    </div>
  );
}

export function TextAreaFooter() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  function handleSend() {
    if (!textAreaRef.current?.value) return;
    console.log(textAreaRef.current.value);
    //TODO: dispatch action that creates new chat balloon
    dispatch(
      sendQuestion({ content: textAreaRef.current.value, isFromUser: true })
    );
  }

  //TODO: WHen user ctrl + a and delete all, the last scrollHeight remains until something is typed
  useEffect(() => {
    function callback(e: Event): void {
      const textArea = e.target as HTMLTextAreaElement;

      const maxHeight = 415;

      textArea.style.height = "auto";

      const newHeight = textArea.scrollHeight;

      textArea.style.height = Math.min(maxHeight, newHeight) + "px";
    }

    textAreaRef.current!.addEventListener("keydown", callback);
  });

  return (
    <div className="p-4 gap-4 flex items-end">
      <TextArea ref={textAreaRef} />
      <button
        className="bg-gray-300 p-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-50 focus:ring-offset-2 cursor-pointer hover:focus:bg-gray-400"
        onClick={handleSend}
      >
        <SendHorizontal />
      </button>
    </div>
  );
}
