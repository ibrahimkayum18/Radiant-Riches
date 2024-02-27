import img from "@/assets/cart.PNG";
import { Container } from "@mui/material";
import Image from "next/image";
const Product = () => {
  return (
    <div className="">
      <h1 className="text-3xl py-10 text-[#2C384A] px-5 lg:px-0 text-center lg:text-left">
        Related deals you might like for
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg p-5 text-[#626E79] lg:min-h-[425px]">
          <Container
            className="pb-12 pt-3"
            sx={{
              "& img": {
                width: "141px",
                margin: "auto",
                height: "103px",
              },
            }}
          >
            <Image src={img} width={500} height={500} alt="" />
          </Container>
          <div className="">
            <p>
              <span className="text-[#074786] py-2 px-3 bg-[#F2F4F7] rounded-lg mr-1">
                20% Off
              </span>
              <span className="text-[#074786] py-2 px-3 bg-[#F2F4F7] rounded-lg">
                Limited time
              </span>
            </p>
            <p className="font-bold text-center py-3">Webbuilder 1</p>
            <p>Computer Modern clasic with wix support</p>
            <div className="py-3">
              <span className="text-2xl pr-4">$39.96</span>
              <span className="pr-4">$49.96</span>
              <span className="text-red-600">(20% Off)</span>
            </div>
            <button className="py-3 btn w-full rounded-lg bg-[#1B88F4] text-white">
              View Deal
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 text-[#626E79] lg:min-h-[425px]">
          <Container
            className="pb-12 pt-3"
            sx={{
              "& img": {
                width: "141px",
                margin: "auto",
                height: "103px",
              },
            }}
          >
            <Image src={img} width={500} height={500} alt="" />
          </Container>
          <div className="">
            <p>
              <span className="text-[#074786] py-2 px-3 bg-[#F2F4F7] rounded-lg mr-1">
                20% Off
              </span>
              <span className="text-[#074786] py-2 px-3 bg-[#F2F4F7] rounded-lg">
                Limited time
              </span>
            </p>
            <p className="font-bold text-center py-3">Webbuilder 1</p>
            <p>Computer Modern clasic with wix support</p>
            <div className="py-3">
              <span className="text-2xl pr-4">$39.96</span>
              <span className="pr-4">$49.96</span>
              <span className="text-red-600">(20% Off)</span>
            </div>
            <button className="py-3 btn w-full rounded-lg bg-[#1B88F4] text-white">
              View Deal
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 text-[#626E79] lg:min-h-[425px]">
          <Container
            className="pb-12 pt-3"
            sx={{
              "& img": {
                width: "141px",
                margin: "auto",
                height: "103px",
              },
            }}
          >
            <Image src={img} width={500} height={500} alt="" />
          </Container>
          <div className="">
            <p>
              <span className="text-[#074786] py-2 px-3 bg-[#F2F4F7] rounded-lg mr-1">
                20% Off
              </span>
              <span className="text-[#074786] py-2 px-3 bg-[#F2F4F7] rounded-lg">
                Limited time
              </span>
            </p>
            <p className="font-bold text-center py-3">Webbuilder 1</p>
            <p>Computer Modern clasic with wix support</p>
            <div className="py-3">
              <span className="text-2xl pr-4">$39.96</span>
              <span className="pr-4">$49.96</span>
              <span className="text-red-600">(20% Off)</span>
            </div>
            <button className="py-3 btn w-full rounded-lg bg-[#1B88F4] text-white">
              View Deal
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center my-10">
        <h1 className="text-4xl px-5">Sign up and get exclusive special deals</h1>
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-l-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-4 py-2 border border-gray-300 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
