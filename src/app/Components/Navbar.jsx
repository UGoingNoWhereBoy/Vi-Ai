import Link from "next/link";
import { FaConnectdevelop, FaEye, FaPaypal } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import Mobilenav from "./Mobilenav";
import Theme from "./Theme";


const Navbar = ({children}) => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <Mobilenav />
              </button>
              <Link href="/" className="flex ml-2 md:mr-24">
                <img
                  src="https://th.bing.com/th/id/OIG.s5viykXLbQf3fhOYX14O?pid=ImgGn"
                  className="h-10 mr-3 rounded-2xl"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Vi-Ai 
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3 mt-2">
                <div>
                   <Theme />
                </div>
            </div>  
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full
         bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <SiOpenai />
                <span className="ml-3">GPT 3.5</span>
              </Link>
            </li>
            <li>
            <Link
                href="/image"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
               <FaEye />
                <span className="ml-3">Image generator</span>
              </Link>
            </li>
            <li>
            <Link
                href="/connect"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
               <FaConnectdevelop />
                <span className="ml-3">Get in touch</span>
                
              </Link>
            </li>
            <li>
            <Link
                href="https://paypal.me/apexa1?country.x=JO&locale.x=en_US"
                target={"_blank"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg
                 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-blue-500 duration-200 ease-linear"
              >
               <FaPaypal />
                <span className="ml-3">Donate with Paypal</span>
              </Link>
            </li>
          </ul>
        </div>
       
      </aside>
        <div className="p-4 sm:ml-64">
        <div className="p-4 mt-24  rounded-lg">
            {children}
        </div>
        </div>
    </>
  );
};

export default Navbar;
