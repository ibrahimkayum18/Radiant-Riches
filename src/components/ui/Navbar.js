const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 pr-4 lg:pr-48 flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
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
