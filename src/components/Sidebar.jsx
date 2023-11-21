import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaWindowMinimize } from "react-icons/fa";
import { close } from "../redux/slices/toggleSlice";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

import clsx from "clsx";
import { setCurrentChat } from "../redux/slices/currentChatSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className="relative flex h-full w-[70%] flex-col bg-background pl-3 pt-3 text-foreground md:w-[250px]">
      {/* TOP */}
      <section className="flex w-full flex-col items-end gap-2 pr-3">
        <FaWindowMinimize
          onClick={() => dispatch(close())}
          className="cursor-pointer"
        />
        <button className="mb-5 w-full self-center rounded-md  border-2 bg-inherit py-2 font-semibold hover:bg-accent">
          +New Chat
        </button>
      </section>
      {/* TOP */}

      <section className="mb-10 flex h-screen w-full flex-col gap-2 overflow-auto pb-12">
        {/* print star emoji */}

        <Folder name={"Chats"} />
        <Folder name={"Star Chats"} icon={"⭐"} />
      </section>
      <section className="absolute bottom-0 left-0 z-40 flex w-full items-center gap-2 border-t bg-background px-3 py-4">
        <div className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-1 hover:bg-primary/10">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <h1>Name</h1>
        </div>
      </section>
    </aside>
  );
};

function Folder({ name, icon }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2 pr-2">
      <h1
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="sticky top-0 z-20 flex cursor-pointer items-center border-b bg-background text-lg font-semibold"
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
  const handleOnclick = (e) => {
    dispatch(setCurrentChat(id));
  };

  return (
    <li
      onClick={handleOnclick}
      title={name}
      className={`${
        currentChat === id
          ? "bg-primary text-primary-foreground"
          : "bg-inherit text-inherit hover:bg-primary/10"
      } relative flex h-10 cursor-pointer items-center rounded-md px-3`}
    >
      <span className="mr-2">💬</span>
      <p className="overflow-hidden whitespace-nowrap">{name}</p>
      {currentChat !== id && (
        <span className="absolute right-0 h-full w-6 rounded-md bg-gradient-to-r from-transparent to-slate-50"></span>
      )}
    </li>
  );
}

export default Sidebar;
