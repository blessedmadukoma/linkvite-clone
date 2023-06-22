import React from "react";
import { GrClose } from "react-icons/gr";
import { usePathname } from "next/navigation";

const Sidebar = ({ close }: { close: any }) => {
  const pathname = usePathname();
  const active = `text-[#fa5a5f] border-b-2 border-b-[#fa5a5f]`;
  const hover = `hover:text-[#fa5a5f]`;
  return (
    <>
      <div className="bg-black">
        <div className="flex justify-end items-center pt-24 sm:px-24 px-12 cursor-pointer">
          <div onClick={close}>
            <GrClose size={25} color="white" />
            {/* close */}
          </div>
        </div>
        <nav className="flex flex-col justify-center items-center p-[1rem] px-[5rem] w-full border-bottom sticky top-0 backdrop-blur-sm z-50">
          <div className="flex flex-col w-full justify-center items-center self-center p-0">
            <div className="flex flex-col lg:w-[35%] lg:justify-between lg:items-center md:text-[#BDBDBD]">
              <div
                className={`${
                  pathname === "/" ? active : hover
                } cursor-pointer`}
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
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
