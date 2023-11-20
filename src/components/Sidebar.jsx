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
    <aside className="w-[70%] md:w-[250px] h-full flex flex-col pl-3 pt-3 bg-background text-foreground relative">
      {/* TOP */}
      <section className="flex flex-col gap-2 w-full items-end pr-3">
        <FaWindowMinimize
          onClick={() => dispatch(close())}
          className="cursor-pointer"
        />
        <button className="w-full self-center border-2 bg-inherit  py-2 rounded-md mb-5 font-semibold hover:bg-accent">
          +New Chat
        </button>
      </section>
      {/* TOP */}

      <section className="w-full h-screen overflow-auto flex flex-col gap-2 mb-10 pb-12">
        {/* print star emoji */}

        <Folder name={"Chats"} />
        <Folder name={"Star Chats"} icon={"⭐"} />
      </section>
      <section className="py-4 border-t flex gap-2 items-center px-3 absolute bottom-0 w-full left-0 z-40 bg-background">
        <div className="flex items-center cursor-pointer hover:bg-primary/10 w-full rounded-md py-1 px-3 gap-2">
          <div className="w-8 h-8 rounded-full bg-primary"></div>
          <h1>Name</h1>
        </div>
      </section>
    </aside>
  );
};

function Folder({ name, icon }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 pr-2">
      <h1
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="text-lg bg-background z-20 flex items-center font-semibold sticky top-0 border-b cursor-pointer"
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
      } flex items-center px-3 h-10 rounded-md cursor-pointer relative`}
    >
      <span className="mr-2">💬</span>
      <p className="whitespace-nowrap overflow-hidden">{name}</p>
      {currentChat !== id && (
        <span className="absolute h-full w-6 right-0 bg-gradient-to-r from-transparent to-slate-50 rounded-md"></span>
      )}
    </li>
  );
}

export default Sidebar;
