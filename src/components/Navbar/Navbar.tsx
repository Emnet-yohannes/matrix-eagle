"use client";
import * as React from "react";
import Logo from "../../../public/matrixLogo.svg";
import LanguageSelector from "../Fotter/languageSelector";
import { useTranslation } from "react-i18next";
import NavLinks from "./NavLinks";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleConnectWallet = () => {
    console.log("connect wallet");
  };

  return (
    <header className="relative w-full z-50 ">
      {/* Top Navbar */}
      <div className="flex justify-between items-center w-full h-[70px] 2xl:h-[111px] md:h-auto px-4 py-3 ">
        {/* Logo & Title */}
        <div className="flex items-center h-[40px] 2xl:h-[111px]">
          <img
            src={Logo}
            alt="Matrix Eagle Logo"
            className=" h-[30px] md:h-[50px]  min-w-[100px] md:min-w-[150px] object-cover"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-x-2 xl:gap-4 2xl:gap-x-8 ">
          <NavLinks />
        </nav>
        {/* Connect Wallet (Always visible) */}
        <div className="hidden md:block md:ml-4">
          <button
            onClick={() => handleConnectWallet()}
            className="text-sm 2xltext-base border-l-4 border-r-4 border-t-4 border-[#FFA100]  rounded-[14px] bg-gradient-to-r from-[#30304E] to-[#27283C] md:w-[170px] h-[45px] flex items-center justify-center cursor-pointer hover:from-[#F0B90BB2] hover:to-[#222222] transition-all duration-300"
          >
            {t("connectWallet")}
          </button>
        </div>
        <div className="flex pb-10  right-0 justify-center items-center h-8 w-[173px]  ">
          <LanguageSelector />
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FFA100] focus:outline-none text-3xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <>&times;</> : <>&#9776;</>}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a2e] flex flex-col items-center py-4 md:hidden z-40 shadow-lg border-t border-[#FFA100] border">
          
          <NavLinks />
          <div className="md:ml-4">
            <div className="hidden md:flex pb-10  right-0 justify-center items-center h-8 w-[173px] ">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
