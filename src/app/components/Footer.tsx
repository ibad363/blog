import Link from "next/link";
import { Search } from "lucide-react";


const Footer = () => {
  return (
    <div className="w-full bg-[#383FEF] mt-16">
      <div className="max-w-[1000px] w-full mx-auto px-2 lg:px-0">
        {/* Navigation Links */}
        <div className="sm:flex justify-between pt-6 pb-2 border-b hidden">
          <nav className="flex justify-center">
            <ul className="flex gap-4">
              <li className="cursor-pointer hover:border-white hover:border-b transition-all duration-300">
                <Link href="/web-dev">Website Developement</Link>
              </li>
              <li className="cursor-pointer hover:border-white hover:border-b transition-all duration-300">
                <Link href="/app-dev">App Developement</Link>
              </li>
              <li className="cursor-pointer hover:border-white hover:border-b transition-all duration-300">
                <Link href="/ai">Artificial Intelligence</Link>
              </li>
              <li className="cursor-pointer hover:border-white hover:border-b transition-all duration-300">
                <Link href="/about">About Me</Link>
              </li>
            </ul>
          </nav>
          <Search className="cursor-pointer"/>
        </div>
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 py-6">
          <Link href={"https://www.linkedin.com/in/ibad-ur-rehman-developer"} className="hover:underline">IBAD UR REHMAN - FRONTEND DEVELOPER</Link>
          <p>2025 - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
