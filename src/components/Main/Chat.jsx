import React, { memo } from "react";

const Chat = memo(() => {
  console.log("Chat");
  return (
    <div className="flex w-full flex-col gap-4">
      <UserMessage />
      <BotMessage />
      <BotMessage />
      <BotMessage />
      <UserMessage />
      <BotMessage />
      <UserMessage />
      <UserMessage />
    </div>
  );
});
const Message = ({
  text,
  bg = "bg-background",
  textColor = "text-foreground",
  align = "items-start",
}) => {
  return (
    <div className={`flex flex-col ${align}`}>
      <div className={`w-full rounded ${bg} p-2 shadow-md`}>
        <p className={`${textColor}`}>{text}</p>
      </div>
    </div>
  );
};
const UserMessage = () => {
  return (
    <Message
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. LaborumLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum"
      align="items-end"
      textColor="text-primary-foreground"
      bg="bg-primary"
    />
  );
};
const BotMessage = () => {
  return <Message text={"peter"} />;
};

export default Chat;
