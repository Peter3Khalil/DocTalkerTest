import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Form from "../components/Form";
const Home = () => {
  console.log("Home");
 

  return (
    <div className="relative flex h-full w-full">
      <Sidebar />

      <section className="flex h-full w-full flex-col md:flex-1">
        <Header />
        <main className="h-full w-full overflow-auto bg-blue-600 px-4 py-2"></main>
        <Form />
      </section>
    </div>
  );
};

export default Home;
