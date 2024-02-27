import { FaRegCheckCircle, FaChevronDown } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const Headers = async () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <div className="px-5 lg:px-0  overflow-hidden text-[#2C384A]">
      {/* Header Title */}
      <h3 className="text-3xl lg:text-5xl py-3 lg:py-5">Best Website builders in the US</h3>
      <div className="flex flex-wrap justify-between items-center py-4 border-y">
        {/* Header date and advertising */}
        <div className="flex flex-wrap items-center justify-start gap-2 lg:gap-5 ">
          <p className="flex items-center gap-2">
            <FaRegCheckCircle className="text-xl" />
            Last Updated - {formattedDate}
          </p>
          <p className="flex items-center gap-2">
            <IoMdInformationCircleOutline className="text-xl" />
            Advertising Discloser
          </p>
        </div>
        {/* For filterring */}
        <div className="pt-2 lg:pt-0">
          <p className="flex items-center gap-2">
            Top Relevant <FaChevronDown className="text-xl" />
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-7 py-2 lg:py-5">
        <p className="bg-white py-2 px-5 rounded-lg ">Tools</p>
        <p className="bg-white py-2 px-5 rounded-lg ">AWS Builder</p>
        <p className="bg-white py-2 px-5 rounded-lg ">Start Build</p>
        <p className="bg-white py-2 px-5 rounded-lg ">Build Supplies</p>
        <p className="bg-white py-2 px-5 rounded-lg ">Tooling</p>
        <p className="bg-white py-2 px-5 rounded-lg ">Hosting</p>
      </div>
      <p className="flex flex-wrap items-center gap-3">
        Home
        <FaAngleRight className="text-xl" />
        Hosting for all 
        <FaAngleRight className="text-xl" />
        Hosting
        <FaAngleRight className="text-xl" />
        Hosting6
        <FaAngleRight className="text-xl" />
        Hosting5
      </p>
    </div>
  );
};

export default Headers;
