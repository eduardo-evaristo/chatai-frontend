import { SendHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatLayout() {
  return (
    <div className="grid grid-cols-2 grid-rows-[1fr_auto] ">
      <div className=""></div>
      <div className=""></div>
      <div className="col-span-2 p-4 gap-4 flex items-end">
        <TextArea />
        <button className="bg-gray-300 p-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-50 focus:ring-offset-2 cursor-pointer hover:focus:bg-gray-400">
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
}

function TextArea() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [input, setInput] = useState<string>("");

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
    <textarea
      ref={textAreaRef}
      className="rounded-2xl bg-gray-200 w-full p-4 resize-none focus:ring-4 focus:ring-gray-50 focus:ring-offset-2 focus:outline-none "
    ></textarea>
  );
}
