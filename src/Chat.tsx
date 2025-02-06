import { Settings2 } from "lucide-react";

export default function Chat() {
  return (
    <div className="bg-pink-300 w-auto h-52 py-10 px-9 rounded-sm relative">
      <Settings2
        className="absolute top-5 right-5 hover:text-gray-50 transition-colors"
        onClick={() => console.log("yeah, totally been clicked")}
      />
      Untitled
    </div>
  );
}
