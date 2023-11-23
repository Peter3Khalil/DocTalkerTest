import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../redux/slices/toggleSlice";
import { IoMdClose } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Image from "next/image";
import clsx from "clsx";
import { setCurrentChat } from "../redux/slices/currentChatSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full">
      <div className="flex h-full w-3/4 flex-col gap-3 bg-background p-2">
        {/* Top */}
        <section className="flex flex-col items-end gap-2">
          <IoMdClose
            className="cursor-pointer text-2xl"
            onClick={() => dispatch(close())}
          />
          <button
            onClick={() => dispatch(setCurrentChat(null))}
            className="flex w-full items-center justify-center rounded-md border-2 bg-inherit py-2 text-lg font-semibold hover:bg-foreground/10"
          >
            + New Chat
          </button>
          {/* Top */}
        </section>

        {/* Middle */}
        <section className="flex h-full flex-col overflow-auto">
          <div className="flex flex-col gap-2">
            <h2 className="border-b text-lg font-semibold text-foreground/50">
              Title
            </h2>
            <ul className="flex flex-col ">
              <Item title="lorem ddjjd lorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjd" />
              <Item title="lorem ddjjd lorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjd" />
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="border-b text-lg font-semibold text-foreground/50">
              Title
            </h2>
            <ul className="flex flex-col text-sm">
              <Item title="lorem ddjjd lorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjd" />
              <Item title="lorem ddjjd lorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjdlorem ddjjd" />
            </ul>
          </div>
          {/* Middle */}
        </section>

        {/* Bottom */}
        <section className="flex h-[100px] w-full items-center gap-2 border-t ">
          <div className="flex items-center gap-2 hover:bg-primary/10 px-2 py-1 w-full rounded-md">
            <div className="relative h-8 w-8 rounded-full">
              <Image
                src="/avatar.jpg"
                layout="fill"
                className="absolute rounded-full object-cover"
              />
            </div>
            <p className="text-sm text-foreground/90 font-semibold">Peter Khalil</p>
          </div>
          {/* Bottom */}
        </section>
      </div>

      <div
        className="h-full w-1/4 bg-foreground/40"
        onClick={() => dispatch(close())}
      ></div>
    </div>
  );
};
function Item({ title }) {
  const dispatch = useDispatch();
  const id = useRef(Date.now());
  const currentChat = useSelector((state) => state.currentChat.currentChat);
  const handleOnclick = (e) => {
    dispatch(setCurrentChat(id));
  };
  return (
    <li
      onClick={handleOnclick}
      className={clsx(
        "flex cursor-pointer items-center justify-between gap-2 rounded-md bg-inherit px-2 py-2",
        currentChat == id
          ? "bg-primary text-primary-foreground"
          : "hover:bg-primary/10",
      )}
    >
      <p className="w-full overflow-hidden text-clip whitespace-nowrap font-medium">
        {title}
      </p>
      <HiOutlineDotsHorizontal
        className="cursor-pointer"
        onClick={() => console.log("Clicked")}
      />
    </li>
  );
}
export default Sidebar;
