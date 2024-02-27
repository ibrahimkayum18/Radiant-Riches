import Image from "next/image";
import Navbar from "@/components/ui/Navbar.js";
import Headers from "@/components/ui/Headers.js";
import Cards from "@/components/ui/Cards";
import Product from "@/components/ui/Product";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <div className="bg-[#FBFCFD] overflow-hidden ">
      <Navbar />
      <div className="w-full lg:w-[1024px] mx-auto ">
        <Headers />
        <Cards />
        <Product />
      </div>
      <Footer />
    </div>
  );
}
