import React, { memo, use } from "react";
import { IoMdMenu } from "react-icons/io";
import {  IoEyeSharp } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { open } from "../redux/slices/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { hidePdf, showPdf } from "../redux/slices/previewPdfSlice";

const Header = memo(() => {
    const dispatch = useDispatch();
    const previewPdf = useSelector((state) => state.previewPdf.previewPdf);
    console.log("Header");
  return (
    <section className="flex h-16 w-full items-center justify-between bg-background px-2 shadow-sm">
      <IoMdMenu
        className="cursor-pointer bg-transparent text-2xl"
        onClick={() => dispatch(open())}
      />
      <h1 className="text-lg font-bold">New Chat</h1>
      {!previewPdf ? (
        <IoEyeSharp
          className="cursor-pointer bg-transparent text-2xl"
          onClick={() => dispatch(showPdf())}
        />
      ) : (
        <IoIosChatboxes
          className="cursor-pointer bg-transparent text-2xl"
          onClick={() => dispatch(hidePdf())}
        />
      )}
    </section>
  );
});

export default Header;
