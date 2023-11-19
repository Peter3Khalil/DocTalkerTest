import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaWindowMinimize } from "react-icons/fa";
import { close } from "../redux/slices/toggleSlice";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

import clsx from "clsx";
import { setCurrentChat } from "../redux/slices/currentChatSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className="w-[70%] md:w-[250px] h-full flex flex-col pl-3 py-3 bg-background text-foreground">
      <FaWindowMinimize
        onClick={() => dispatch(close())}
        className="self-end mb-3 mr-3 cursor-pointer"
      />
      <button className="w-full self-center border-2 bg-inherit mr-3 py-2 rounded-md mb-5 font-semibold hover:bg-accent">
        +New Chat
      </button>
      <section className="w-full h-screen overflow-auto flex flex-col gap-2">
        {/* print star emoji */}

        <Folder name={"Chats"} />
        <Folder name={"Star Chats"} icon={"⭐"} />
      </section>
      <section className="py-6">bottom</section>
    </aside>
  );
};

function Folder({ name, icon }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 pr-2">
      <h1
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="text-lg flex items-center font-semibold sticky top-0 bg-background border-b cursor-pointer"
      >
        {isCollapsed ? (
          <MdOutlineExpandLess className="rotate-90" />
        ) : (
          <MdOutlineExpandMore />
        )}
        {icon && <span className="mr-2 text-sm">{icon}</span>}
        {name || "Folder"}
      </h1>
      <ul className={clsx("w-full", isCollapsed ? "hidden" : "")}>
        {Array.from({ length: 10 }, (_, i) => {
          let id = Math.random();
          return (
            <Item
              name="Chat 1 Chat 1Chat 1Chat 1Chat 1Chat 1Chat 1Chat 1"
              id={id}
              key={id}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ name, id }) {
  const currentChat = useSelector((state) => state.currentChat.currentChat);
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => dispatch(setCurrentChat(id))}
      className={`${
        currentChat === id
          ? "bg-primary text-primary-foreground"
          : "bg-inherit text-inherit hover:bg-primary/10"
      } py-2 px-3 rounded-md cursor-pointer whitespace-nowrap overflow-hidden`}
    >
      <span className="mr-2">💬</span>
      {name}
    </li>
  );
}

export default Sidebar;
