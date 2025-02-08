import { useLoaderData } from "react-router-dom";
import ChatItem from "./ChatItem";
import NewChatButton from "./NewChatButton";
import { Chat } from "./types";

export default function ChatsSection() {
  //This is how we type out useLoaderData without it saying this should be unknown
  const chats = useLoaderData() as Chat[];
  console.log(chats);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center w-screen p-5 overflow-scroll">
      {chats.map((chat) => (
        <ChatItem key={chat.id} data={chat} />
      ))}
      <NewChatButton />
    </div>
  );
}

// how tf do I disable this fast refresh warning!!!!!!!!!!!!!!?
export async function loader() {
  const res = await fetch("http://localhost:3000/chats", {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMzdhZGJmMC03YTllLTRiODMtYTJlOC0zNWVmZWJhMzJjNDEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczOTAzMDE2NCwiZXhwIjoxNzM5MDMzNzY0fQ.wPy_cyR6htbYfmfXAZNJSCj8BlSwbFD2_Dvat7uJZK4",
    },
  });
  const data = await res.json();
  return data;
}

// {
// 	"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMzdhZGJmMC03YTllLTRiODMtYTJlOC0zNWVmZWJhMzJjNDEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczOTAzMDE2NCwiZXhwIjoxNzM5NjM0OTY0fQ.JAhGbL70ChR69BKuQXRqR8ruwf8XoY36Il2nPx0YcXI",
// 	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMzdhZGJmMC03YTllLTRiODMtYTJlOC0zNWVmZWJhMzJjNDEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczOTAzMDE2NCwiZXhwIjoxNzM5MDMzNzY0fQ.wPy_cyR6htbYfmfXAZNJSCj8BlSwbFD2_Dvat7uJZK4"
// }
