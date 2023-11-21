import React, { useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useDispatch, useSelector } from "react-redux";
import { close, open } from "../redux/slices/toggleSlice";
import Sidebar from "../components/Sidebar";
import { FiMaximize } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import ChatContainer from "../components/ChatContainer";
import PdfViewer from "../components/PdfViewer";

const Home = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    if (isMobile) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  }, [isMobile]);
  return (
    <div className="relative flex  h-screen w-full overflow-hidden">
      <div
        className={clsx(
          "h-full w-full border md:w-fit",
          !isOpen ? "hidden" : "flex",
        )}
      >
        <Sidebar />
        <div
          onClick={() => dispatch(close())}
          className="h-full flex-1 bg-black/80 md:hidden"
        ></div>
      </div>

      <main className="relative flex w-full flex-1 flex-col bg-background px-6 text-foreground md:p-0">
        {/* Maximize */}
        <div
          onClick={() => dispatch(open())}
          className={clsx(
            "absolute left-3 top-3 z-30 cursor-pointer rounded-md border p-1 text-foreground",
            isOpen ? "hidden" : "",
          )}
        >
          <FiMaximize />
        </div>
        {/* Maximize */}

        <header className="h-12 w-full bg-white shadow-md fixed"></header>
        <div className="flex h-full w-full mt-12">
          <ChatContainer />
          <PdfViewer />
        </div>
      </main>
    </div>
  );
};

export default Home;
