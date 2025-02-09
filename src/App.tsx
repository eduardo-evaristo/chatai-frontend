import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { action } from "./NewChatButton";
import AppLayout from "./AppLayout";
import ChatsSection, { loader as chatsLoader } from "./ChatsSection";
import { Provider } from "react-redux";
import store from "./store/store";
import ChatLayout, { ChatBalloon } from "./ChatLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="chats" replace={true} /> },
      {
        path: "chats",
        element: <ChatsSection />,
        loader: chatsLoader,
        action: action,
      },
    ],
  },
  {
    path: "/chat",
    element: <ChatLayout />,
    children: [
      {
        path: ":id",
        element: (
          <>
            <ChatBalloon />
            <ChatBalloon user={true} />
            <ChatBalloon />
            <ChatBalloon user={true} />
            <ChatBalloon />
            <ChatBalloon user={true} />
          </>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
