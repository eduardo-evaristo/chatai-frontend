import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-indigo-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center w-screen p-5 overflow-scroll">
  {Array.from({ length: 10 }, (_val, i) => (
    <Chat key={i} />
  ))}
  <NewChatButton />
</div>; */
}
