import { Outlet } from "react-router";
import { AuthFooter, AuthHeader } from "@/components/layout";

export const AuthLayout = () => {
  return (
    <div className=" flex flex-col bg-[#F6F5F3]" dir="rtl">
      <AuthHeader />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
