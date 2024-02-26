import Image from "next/image";
import Navbar from "@/components/ui/Navbar.js";
import Headers from "@/components/ui/Headers.js";
import Cards from "@/components/ui/Cards";
export default function Home() {
  return (
    <div className="bg-gray-100 overflow-hidden ">
      <Navbar />
      <div className="w-full lg:w-[80%] mx-auto ">
        <Headers />
        <Cards />
      </div>
    </div>
  );
}
