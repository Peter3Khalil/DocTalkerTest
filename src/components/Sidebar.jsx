import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../redux/slices/isSidebarOpened";
const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpened = useSelector(
    (state) => state.isSidebarOpened.isSidebarOpened,
  );

  return (
    <aside
      className={`absolute left-0 top-0 transform transition-all duration-300 ease-in-out ${
        isSidebarOpened
          ? "w-full translate-x-0 md:w-72"
          : "w-0 -translate-x-full"
      } z-10 flex h-full bg-blue-300 md:static`}
    >
      {isSidebarOpened && (
        <>
          <div className="h-full w-[80%] bg-blue-300 md:w-full">
            <button className="md:hidden" onClick={() => dispatch(close())}>Close</button>
          </div>
          <div className="h-full flex-1 bg-slate-400 md:hidden" onClick={()=>dispatch(close())}></div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
