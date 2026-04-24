/**
 * Footer component
 */

import { APP_NAME, APP_VERSION } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">{APP_NAME}</p>
            <p className="text-sm text-gray-400">Version {APP_VERSION}</p>
          </div>
          <p className="text-gray-400">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
