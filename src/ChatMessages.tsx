import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { ChatMessage } from "./types";
import { ChatBalloon } from "./ChatLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setCurrentChat } from "./store/chatsSlice";

export default function ChatMessages() {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const chatMessages = useSelector<RootState>(
    (store) => store.chats.chatInteraction
  ) as ChatMessage[];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setCurrentChat(id!));
  }, []);

  return (
    <>
      {chatMessages.map((message) => (
        <ChatBalloon content={message.content} user={message.isFromUser} />
      ))}
    </>
  );
}
