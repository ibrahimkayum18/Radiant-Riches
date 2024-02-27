import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#212731] text-white pt-16 pb-16 px-5 lg:px-0 lg:min-h-[452px]">
      <div className=" lg:w-[1024px] mx-auto flex">
        <div className="space-y-4 w-1/2 lg:w-2/5">
          <p className=" text-xl">CATEGORIES</p>
          <p>Web Builder</p>
          <p>Hosting</p>
          <p>Data Center</p>
          <p>Robotic-Automation</p>
        </div>
        <div className="md:flex justify-between items-center w-1/2 lg:w-3/5">
          <div className="space-y-4">
            <p className=" text-xl">CONTACT</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Categories</p>
            <p>About</p>
          </div>
          <p className="flex items-center gap-2 pt-5 lg:pt-0">
            United States <FaChevronDown className="text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
