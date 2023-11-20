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
  const message =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci distinctio placeat vitae, alias illum facere repudiandae inventore dignissimos, eveniet ex aliquid eius soluta exercitationem iste, perferendis recusandae quaerat vero! Minus.";
  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      <div
        className={clsx(
          "w-full border md:w-fit h-full absolute left-0 top-0 z-10 flex",
          !isOpen ? "hidden" : "md:flex md:relative"
        )}
      >
        <Sidebar />
        <div onClick={()=>dispatch(close())} className="flex-1 h-full bg-black/80 md:hidden" ></div>
      </div>

      <main className="flex-1 bg-background text-foreground flex relative px-6 md:p-0">
        <div
          onClick={() => dispatch(open())}
          className={clsx(
            "absolute top-3 left-3 z-30 cursor-pointer border p-1 rounded-md text-foreground",
            isOpen ? "hidden" : ""
          )}
        >
          <FiMaximize />
        </div>

        <div className="w-full h-full flex gap-2 flex-row-reverse">
          {/* PDFViewer */}
          <div className="hidden md:flex flex-1 h-full bg-sky-100">pdf</div>
          {/* PDFViewer */}

          {/* Conversation */}
          <div className="flex-1 h-full flex flex-col gap-3 md:m-0 overflow-auto pb-3 px-4">
            <div className="w-full h-32 bg-slate-400 flex justify-end">
              <div className="h-12 w-60 bg-black"></div>
            </div>
            <div className="w-full h-32 bg-slate-400 flex justify-start">
              <div className="h-12 w-60 bg-black"></div>
            </div>
          </div>
          {/* Conversation */}
        </div>
      </main>
    </div>
  );
};
function Conversation({ name = "Me", message }) {
  return (
    <div
      className={clsx(
        "max-w-[70%] w-fit flex gap-2 items-start px-3 py-2 rounded-md"
      )}
    >
      <h1 className="capitalize">{name}:</h1>
      <p className="text-sm">{message}</p>
    </div>
  );
}
export default Home;
