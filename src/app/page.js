import Image from "next/image";
import Navbar from "@/components/ui/Navbar.js";
import Headers from "@/components/ui/Headers.js";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="w-[80%] mx-auto bg-gray-300 h-screen">
        <Headers />
      </div>
    </div>
  );
}
