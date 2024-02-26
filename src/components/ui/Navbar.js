const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 pr-4 lg:pr-48 flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className=" px-3 py-2 rounded-md text-gray-700 focus:outline-none"
        />
      </div>

      {/* Right Side - Page Links */}
      <div className="flex justify-around items-center space-x-4 lg:space-x-10">
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
