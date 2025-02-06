import { Plus } from "lucide-react";

export default function NewChatButton() {
  return (
    <div className="bg-pink-400 w-max h-max absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-3 py-2 px-4 rounded-sm hover:bg-pink-500 transition-colors ">
      <span className="text-gray-50 font-semibold text-lg select-none">
        New chat
      </span>
      <Plus color="#f9fafb" strokeWidth={4} />
    </div>
  );
}
