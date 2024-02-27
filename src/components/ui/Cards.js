import Image from "next/image";
import cartImg from "@/assets/cart.PNG";
import { Container, Rating } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { SlTrophy } from "react-icons/sl";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";




const Cards = () => {
  return (
    <div className="mt-12 text-[#4B5665] ">
      <div className="lg:flex bg-white lg:min-h-[255px] pb-5 lg:pb-0 rounded-lg">
        <Container
          className="w-full lg:w-[25%] pt-12 py-5 relative"
          sx={{
            "& img": {
              width: "400px",
              margin: "auto",
            },
          }}
        >
          <Image src={cartImg} width={300} height={250} alt="" />
          <h3 className="text-center py-1">Builder 1</h3>
          <span className="absolute top-0 left-0 lg:-top-5 lg:-left-3 z-50 rounded-r-lg shadow-md py-2 px-3 text-white bg-[#FF7724] flex item-center gap-2"><SlTrophy className="text-2xl"/> Best Choice</span>
          <span className="absolute top-0 right-0 lg:top-8 lg:-left-7 rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl bg-white">1</span>
        </Container>
        <div className="w-full lg:w-[50%] py-5 px-5 lg:px-0">
          <h1>
            <span className="font-bold">
              WixPro 72-Inch Responsive Website Builder-
            </span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </h1>
          <h1 className="font-bold">Main highlights</h1>
          <p className="pl-5 py-2">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <p className="flex items-center gap-2 text-blue-500">
            Show More <FaChevronDown className="text-xl" />
          </p>
        </div>
        <div className="w-full lg:w-[25%]">
          <div className="bg-[#F3F9FF] text-center w-[135px] h-[118px] mx-auto rounded-b-lg">
            <h2 className="text-[32px] pt-1">9.8</h2>
            <p className="pb-1">Exceptional</p>
            <Rating name="size-small" defaultValue={5} size="small" />
          </div>
          <div className="text-center mt-5 lg:mt-16">
            <button className="py-3 btn w-[232px] rounded-lg bg-[#1B88F4] text-white">
              {" "}
              View
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex bg-white lg:min-h-[255px] pb-5 lg:pb-0 mt-7 rounded-lg">
        <Container
          className="w-full lg:w-[25%] pt-12 py-5 relative"
          sx={{
            "& img": {
              width: "400px",
              margin: "auto",
            },
          }}
        >
          <Image src={cartImg} width={300} height={250} alt="" />
          <h3 className="text-center py-1">Builder</h3>
          <span className="absolute top-0 left-0 lg:-top-5 lg:-left-3 z-50 rounded-r-lg shadow-md py-2 px-3 text-white bg-[#FF7724] flex item-center gap-2"><IoDiamondOutline className="text-2xl"/>Best Choice</span>
          <span className="absolute top-0 right-0 lg:top-8 lg:-left-7 rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl bg-white">2</span>
        </Container>
        <div className="w-full lg:w-[50%] py-5 px-5 lg:px-0">
          <h1>
          <span className="font-bold">SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
          </h1>
          <h1 className="font-bold">Main highlights</h1>
          <p className="pl-5 py-2">
          [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
          </p>
          <p className="flex items-center gap-2 text-blue-500">
            Show More <FaChevronDown className="text-xl" />
          </p>
        </div>
        <div className="w-full lg:w-[25%]">
          <div className="bg-[#F3F9FF] text-center w-[135px] h-[118px] mx-auto rounded-b-lg">
            <h2 className="text-[32px] pt-1">9.5</h2>
            <p className="pb-1">Exceptional</p>
            <Rating name="size-small" defaultValue={4} size="small" />
          </div>
          <div className="text-center mt-5 lg:mt-16">
            <button className="py-3 btn w-[232px] rounded-lg bg-[#1B88F4] text-white">
              {" "}
              View
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex bg-white lg:min-h-[255px] pb-5 lg:pb-0 mt-7 rounded-lg">
        <Container
          className="w-full lg:w-[25%] pt-12 py-5 relative"
          sx={{
            "& img": {
              width: "400px",
              margin: "auto",
            },
          }}
        >
          <Image src={cartImg} width={300} height={250} alt="" />
          <h3 className="text-center py-1">Builder</h3>
          
          <span className="absolute top-0 right-0 lg:top-8 lg:-left-7 rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl bg-white">3</span>
        </Container>
        <div className="w-full lg:w-[50%] py-5 px-5 lg:px-0">
          <h1>
          <span className="font-bold">WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
          </h1>
          <h1 className="font-bold">Main highlights</h1>
          <p className="pl-5 py-2">
          [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
          </p>
          <p className="flex items-center gap-2 text-blue-500">
            Show More <FaChevronDown className="text-xl" />
          </p>
        </div>
        <div className="w-full lg:w-[25%]">
          <div className="bg-[#F3F9FF] text-center w-[135px] h-[118px] mx-auto rounded-b-lg">
            <h2 className="text-[32px] pt-1">9.3</h2>
            <p className="pb-1">Exceptional</p>
            <Rating name="size-small" defaultValue={4} size="small" />
          </div>
          <div className="text-center mt-5  lg:mt-16">
            <button className="py-3 btn w-[232px] rounded-lg bg-[#1B88F4] text-white">
              {" "}
              View
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex bg-white  my-7 pb-5 lg:pb-0 rounded-lg">
        <Container
          className="w-full lg:w-[25%] pt-12 py-5 relative"
          sx={{
            "& img": {
              width: "400px",
              margin: "auto",
            },
          }}
        >
          <Image src={cartImg} width={300} height={250} alt="" />
          <h3 className="text-center py-1">CDK</h3>
          
          <span className="absolute top-0 right-0 lg:top-8 lg:-left-7 rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl bg-white">4</span>
        </Container>
        <div className="w-full lg:w-[50%] py-5 px-5 lg:px-0">
          <h1 className="py-1">
          <span className="font-bold">CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides
          </h1>
          <span className="text-[#074786] py-1 px-2 bg-[#F2F4F7] rounded-lg mr-1">
                26% Off
              </span>
          <h1 className="font-bold py-1">Main highlights</h1>
          <div className="bg-[#FFF4ED] px-2 py-2 space-y-2 rounded-lg ml-5 mb-3 mt-1">
            <p><span className="px-2 py-1 bg-white rounded-lg">9.9</span> building responsive</p>
            <p><span className="px-2 py-1 bg-white rounded-lg">8.9</span> Cool</p>
            <p><span className="px-2 py-1 bg-white rounded-lg">8.9</span> Docs</p>
          </div>
          <p>Why we love it</p>
          <div className=" px-2 py-2 space-y-2 rounded-lg ml-5">
            <p className="flex item-center gap-2"><span ><FaCheck className="text-blue-600 w-6 h-6 bg-sky-200 rounded-full p-1"/></span> Out of box</p>
            <p className="flex item-center gap-2"><span ><FaCheck className="text-blue-600 w-6 h-6 bg-sky-200 rounded-full p-1"/></span> Documentation</p>
            <p className="flex item-center gap-2"><span ><FaCheck className="text-blue-600 w-6 h-6 bg-sky-200 rounded-full p-1"/></span> Easy Use</p>
          </div>
          <p className="flex items-center gap-2 text-blue-500">
            Show More <FaChevronDown className="text-xl" />
          </p>
        </div>
        <div className="w-full lg:w-[25%]">
          <div className="bg-[#F3F9FF] text-center w-[135px] h-[118px] mx-auto rounded-b-lg">
            <h2 className="text-[32px] pt-1">9.1</h2>
            <p className="pb-1">Very Good</p>
            <Rating name="size-small" defaultValue={4} size="small" />
          </div>
          <div className="text-center mt-5 lg:mt-60">
            <button className="py-3 btn w-[232px] rounded-lg bg-[#1B88F4] text-white">
              {" "}
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
