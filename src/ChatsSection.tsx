import ChatItem from "./ChatItem";
import NewChatButton from "./NewChatButton";
import { Chat } from "./types";
import { useSelector } from "react-redux";
import store, { RootState } from "./store/store";
import { load } from "./store/chatsSlice";

export default function ChatsSection() {
  //This is how we type out useLoaderData without it saying this should be unknown
  //const chats = useLoaderData() as Chat[];
  const chats = useSelector<RootState>((store) => store.chats.chats) as Chat[];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center w-screen p-5 overflow-scroll">
      {chats.length === 0 ? (
        <h1>Create your first chat to start off</h1>
      ) : (
        chats.map((chat) => <ChatItem key={chat.id} data={chat} />)
      )}
      <NewChatButton />
    </div>
  );
}

// how tf do I disable this fast refresh warning!!!!!!!!!!!!!!?
export async function loader() {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/chats`, {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  store.dispatch(load(data));
  return data;
}
