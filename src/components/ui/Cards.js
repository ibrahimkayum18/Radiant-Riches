import Image from "next/image";
import cartImg from "@/assets/cart.PNG";
import { Container, Rating } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="mt-20 overflow-auto ">
      <div className="lg:flex bg-white  min-h-[255px] rounded-lg">
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
          <span className="absolute top-0 left-0 lg:-top-5 lg:-left-3 z-50 rounded-r-lg shadow-md py-2 px-3 text-white bg-[#FF7724]">Best Choice</span>
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
            <Rating name="size-small" defaultValue={2} size="small" />
          </div>
          <div className="text-center mt-10">
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
