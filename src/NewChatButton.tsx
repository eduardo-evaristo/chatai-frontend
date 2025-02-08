import { Plus } from "lucide-react";
import { Form, redirect } from "react-router-dom";

export default function NewChatButton() {
  return (
    <Form method="post">
      <button className="bg-pink-400 w-max h-max absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-3 py-2 px-4 rounded-sm hover:bg-pink-500 transition-colors shadow-2xl focus:ring-4 focus:ring-gray-50 focus:ring-offset-2">
        <span className="text-gray-50 font-semibold text-lg select-none">
          New chat
        </span>
        <Plus color="#f9fafb" strokeWidth={4} />
      </button>
    </Form>
  );
}

//Might use thunks for this...
export async function action() {
  const res = await fetch("http://localhost:3000/chats", {
    method: "POST",
    headers: [
      [
        "authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMzdhZGJmMC03YTllLTRiODMtYTJlOC0zNWVmZWJhMzJjNDEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczOTAzMDE2NCwiZXhwIjoxNzM5MDMzNzY0fQ.wPy_cyR6htbYfmfXAZNJSCj8BlSwbFD2_Dvat7uJZK4",
      ],
    ],
  });
  const data = await res.json();
  return redirect(`http://localhost:5173/chats/${data.id}`);
}
