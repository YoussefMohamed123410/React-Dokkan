import { Outlet } from "react-router";
import { Footer, Header } from "@/components/layout";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
