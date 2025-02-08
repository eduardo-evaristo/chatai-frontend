import React from "react";
import { Brain, MessagesSquare, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const iconsArray = [
  { element: MessagesSquare, path: "chats" },
  { element: Brain, path: "summaries" },
  { element: Settings, path: "settings" },
];

export default function Footer() {
  return (
    <footer className="bg-pink-700 p-4 grid grid-cols-3 sticky ">
      {/* {iconsArray.map((icon) =>
        React.createElement(icon, {
          className:
            "self-center justify-self-center hover:text-pink-200 transition-colors",
        })
      )} */}
      {iconsArray.map((icon) => (
        <NavLink
          to={icon.path}
          className="self-center justify-self-center hover:text-pink-200 transition-colors"
        >
          {React.createElement(icon.element)}
        </NavLink>
      ))}
    </footer>
  );
}
