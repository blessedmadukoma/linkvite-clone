"use client";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  console.log(`Pathname: ${pathname}`);

  const active = `text-[#fa5a5f] border-b-2 border-b-[#fa5a5f]`;
  const hover = `hover:text-[#fa5a5f]`;

  return (
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
        <div className="flex w-[35%] justify-between items-center text-[#BDBDBD]">
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
        <div className="min-w-[15%] flex justify-between space-x-4 items-center">
          <div className="hover:text-[#fa5a5f]">
            <a href="#">Login</a>
          </div>
          <div className="bg-[#fa5a5f] py-2 px-3 rounded-[0.25rem] items-center border border-gray-900 text-center hover:bg-gray-900 hover:border hover:border-[#fa5a5f] hover:text-[#fa5a5f]">
            <a href="#">Request Access</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
