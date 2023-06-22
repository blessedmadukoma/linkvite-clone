"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./MobileNav";

import { GrClose } from "react-icons/gr";

const Header = () => {
  const pathname = usePathname();

  console.log(`Pathname: ${pathname}`);

  const active = `text-[#fa5a5f] border-b-2 border-b-[#fa5a5f]`;
  const hover = `hover:text-[#fa5a5f]`;

  const [show, setShow] = useState(false);

  const handleShow = (event: any) => {
    setShow(!show);
  };

  console.log(`Show in header: ${show}`);

  return (
    <>
      <nav className="flex justify-between items-center p-[1rem] px-[5rem] w-full border-bottom sticky top-0 backdrop-blur-sm z-50">
        <div className="flex w-full justify-between items-center self-center p-0">
          <div className="min-w-[15%]">
            <a
              href="/"
              className="flex items-center text-[1.45rem] space-x-2 hover:text-[#fa5a5f]"
            >
              <img
                alt="paws"
                src="https://assets.linkvite.io/cdn/favicon.webp"
                className="w-[40px]"
              />
              <span>Linkvite</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:w-[35%] lg:justify-between lg:items-center md:text-[#BDBDBD]">
            <div
              className={`${pathname === "/" ? active : hover} cursor-pointer`}
            >
              <a href="/">Home</a>
            </div>
            <div
              className={`${
                pathname === "/features" ? active : hover
              } cursor-pointer`}
            >
              <a href="#">Features</a>
            </div>
            <div
              className={`${
                pathname === "/pricing" ? active : hover
              } cursor-pointer`}
            >
              <a href="#">Pricing</a>
            </div>
            <div
              className={`${
                pathname === "/about" ? active : hover
              } cursor-pointer`}
            >
              <a href="#">About</a>
            </div>
            <div
              className={`${
                pathname === "/contact" ? active : hover
              } cursor-pointer`}
            >
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="hidden lg:min-w-[15%] lg:flex lg:justify-between space-x-4 items-center">
            <div className="hover:text-[#fa5a5f]">
              <a href="#">Login</a>
            </div>
            <div className="bg-[#fa5a5f] py-2 px-3 rounded-[0.25rem] items-center border border-gray-900 text-center hover:bg-gray-900 hover:border hover:border-[#fa5a5f] hover:text-[#fa5a5f]">
              <a href="#">Request Access</a>
            </div>
          </div>
        </div>
        <div className="lg:hidden block cursor-pointer">
          {show ? (
            <div
              onClick={() => {
                close;
                setShow(!show);
              }}
            >
              <GrClose
                size={35}
                color="white"
                className="bg-white text-white rounded-full p-2"
              />
              {/* close */}
            </div>
          ) : (
            <button className="navbar-toggler" onClick={handleShow}>
              <span className="navbar-toggler-icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.8em"
                  width="1.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </span>
            </button>
          )}
        </div>
      </nav>

      {show ? <MobileNav close={close} /> : null}
    </>
  );
};

export default Header;
