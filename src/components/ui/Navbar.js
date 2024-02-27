import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="drawer text-[#D1D6DA] lg:max-w-6xl">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-gray-800">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="relative w-full lg:w-[258px] lg:mr-[60px]  mx-auto">
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoIosSearch className="text-3xl"/>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal space-x-11">
                {/* Navbar menu content here */}
                <li>
                  <a>Categories</a>
                </li>
                <li>
                  <a>Website Builders</a>
                </li>
                <li>
                  <a>Todays deals</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-gray-800 text-[#D1D6DA] pt-20">
            {/* Sidebar content here */}
            <li>
                  <a>Categories</a>
                </li>
                <li>
                  <a>Website Builders</a>
                </li>
                <li>
                  <a>Todays deals</a>
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
