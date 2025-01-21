import { Search, HelpCircle, AlignLeft, UserRound } from "lucide-react";
import Logo from "../assets/logo.png";

type NavigationProps = {
  onOpenSidebar: () => void;
};

export function NavBar({ onOpenSidebar }: NavigationProps) {
  return (
    <nav className="bg-[#414143] backdrop-blur-sm text-white py-4 px-4 sticky top-0 z-50">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between lg:justify-start">
          {/* Left Section */}
          <button onClick={onOpenSidebar} className="lg:hidden">
            <AlignLeft className="h-6 w-6 me-2" />
          </button>
          <div className="flex items-center lg:justify-start flex-1 lg:flex-none ">
            <img src={Logo} alt="logo" className="w-10 h-10" />
          </div>

          {/* Middle Section */}
          <div className="hidden lg:flex space-x-8 flex-1 justify-center">
            <button className="hover:text-gray-300">Collection</button>
            <button className="hover:text-gray-300">Category</button>
            <button className="hover:text-gray-300">Visit</button>
            <button className="hover:text-gray-300">About us</button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Search className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
            <HelpCircle className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
            <UserRound className=" h-5 w-5 hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
