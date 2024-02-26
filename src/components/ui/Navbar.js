const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 pr-48 flex justify-end items-center">

      {/* Right Side - Page Links */}
      <div className="flex justify-around items-center space-x-10">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 rounded-md text-gray-700  focus:outline-none"
        />
        <a href="#" className="text-white hover:text-gray-300">
          Categories
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Website Builders
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Todays Deals
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
