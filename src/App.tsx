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
import ChatMessages from "./ChatMessages";

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
        element: <ChatMessages />,
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
