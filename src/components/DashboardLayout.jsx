import Header from "./Header";
import Sidebar from "./Sidebar";

import Form from "./Form";
const DashboardLayout = ({ children }) => {
  console.log("DashboardLayout");
  return (
    <div className="relative flex h-full w-full">
      <Sidebar />

      <section className="flex h-full w-full flex-col md:flex-1">
        <Header />
        <main className="relative h-full md:flex w-full overflow-auto bg-background px-4 py-2">
          {children}
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
