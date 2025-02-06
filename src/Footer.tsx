import React from "react";
import { Brain, MessagesSquare, Settings } from "lucide-react";

const iconsArray = [Brain, MessagesSquare, Settings];

export default function Footer() {
  return (
    <footer className="bg-pink-700 p-4 grid grid-cols-3  ">
      {iconsArray.map((icon) =>
        React.createElement(icon, {
          className:
            "self-center justify-self-center hover:text-pink-200 transition-colors",
        })
      )}
    </footer>
  );
}
