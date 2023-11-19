import React, { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { close, open } from "../redux/slices/toggleSlice";
import Sidebar from "../components/Sidebar";
import { FiMaximize } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  useEffect(() => {
    if (isMobile) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  }, []);
  return (
    <div className="w-full h-screen flex relative">
      <div className={clsx("w-full border md:w-fit h-full absolute left-0 top-0 z-10 flex",!isOpen?"hidden":"md:flex md:relative")}>
        <Sidebar />
        <div className="flex-1 h-full bg-black/80 md:hidden"></div>
      </div>

      <main className="flex-1 bg-background text-foreground flex relative ">
        <div
          onClick={() => dispatch(open())}
          className={clsx(
            "absolute top-3 left-3 cursor-pointer border p-1 rounded-md text-foreground",
            isOpen ? "hidden" : ""
          )}
        >
          <FiMaximize />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-4xl">Hello World</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
