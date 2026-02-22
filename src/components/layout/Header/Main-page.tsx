import LoginBtn from "../../common/Login-btn";
import MobileMenu from "./Mobile-menu";
import MobileMenuBtn from "./Mobile-menuBtn";
import NavBar from "./Navbar";
import { useState } from "react";

function MainPage () {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Studeasy</h1>
          </div>

          {/* Desktop nav */}
            <NavBar />
          {/* login button */}
          <LoginBtn />
          {/* Mobile menu button */}
        <MobileMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Mobile menu */}
     <MobileMenu isOpen ={isOpen} />
    </header>
    )
}
export default MainPage;