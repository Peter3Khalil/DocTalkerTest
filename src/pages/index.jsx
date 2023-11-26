import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
const Home = () => {
  console.log("Home");
  return (
    <main className="flex h-[calc(100vh-60px)] w-full md:h-screen">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Header />
        <Body />
      </div>
    </main>
  );
};

export default Home;
