import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdRemoveRedEye } from "react-icons/md";
import { close, open } from "../redux/slices/isSidebarOpened";
const Header = () => {
  const dispatch = useDispatch();
  const isSidebarOpened = useSelector(
    (state) => state.isSidebarOpened.isSidebarOpened,
  );
  const handleBlur = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <header className="flex h-12 w-full flex-shrink-0 items-center justify-between bg-background shadow-sm text-foreground px-4">
      <button onClick={() =>isSidebarOpened?dispatch(close()) :dispatch(open())}>
        <HiMenuAlt1 className="text-2xl" />
      </button>
      <h1 className="text-xl font-semibold w-32 whitespace-nowrap overflow-hidden md:w-52 lg:w-[400px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis illum neque sunt sequi sint unde fugit tenetur ipsam tempora dolorem, eligendi delectus perferendis nesciunt temporibus molestiae, cum numquam, iure facere!</h1>
      <button>
        <MdRemoveRedEye className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
