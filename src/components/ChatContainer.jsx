import React from "react";

const ChatContainer = () => {
  return (
    <div className="h-full w-full overflow-auto px-2 md:w-1/2">
      <section className="w-full overflow-auto">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </section>
    </div>
  );
};
function Chat() {
  return (
    <div className="mt-3 flex w-full flex-col">
      <div className="min-h-16 flex w-full gap-1 rounded-md border-b bg-background px-2 py-3  font-bold">
        <h1>Me:</h1>
        <p>How Are You?</p>
      </div>
      <div className="min-h-16 flex w-full gap-1 rounded-md border-b bg-primary px-2 py-3 text-primary-foreground">
        <h1>Bot:</h1>
        <p>Fine!</p>
      </div>
    </div>
  );
}
export default ChatContainer;
