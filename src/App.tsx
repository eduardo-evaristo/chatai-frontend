import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { action } from "./NewChatButton";
import AppLayout from "./AppLayout";
import ChatsSection, { loader as chatsLoader } from "./ChatsSection";

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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
