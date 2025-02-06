import Chat from "./Chat";
import Footer from "./Footer";
import Header from "./Header";
import NewChatButton from "./NewChatButton";

export default function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-screen">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center w-screen p-5 overflow-scroll">
          {Array.from({ length: 10 }, (_val, i) => (
            <Chat key={i} />
          ))}
          <NewChatButton />
        </div>
        <Footer />
      </div>
    </>
  );
}
