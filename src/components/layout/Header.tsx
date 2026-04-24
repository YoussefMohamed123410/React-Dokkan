/**
 * Header/Navbar component
 */

import { Link } from "react-router";
import { APP_NAME } from "@/constants";
import { ROUTE_PATHS } from "@/routes";

export const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to={ROUTE_PATHS.HOME} className="text-2xl font-bold">
            {APP_NAME}
          </Link>
          <nav className="flex gap-6">
            <Link
              to={ROUTE_PATHS.HOME}
              className="hover:text-gray-200 transition"
            >
              Home
            </Link>
            <Link
              to={ROUTE_PATHS.ABOUT}
              className="hover:text-gray-200 transition"
            >
              About
            </Link>
            <Link
              to={ROUTE_PATHS.CONTACT}
              className="hover:text-gray-200 transition"
            >
              Contact
            </Link>
            <Link
              to={ROUTE_PATHS.REGISTER}
              className="hover:text-gray-200 transition"
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
