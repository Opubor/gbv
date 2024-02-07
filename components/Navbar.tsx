"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowAltCircleUp, FaHandsHelping } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-3 fixed left-0 right-0 top-0 px-2 lg:px-28 bg-purple-100 z-50">
        <div className="flex justify-start items-center gap-1 lg:gap-2 text-base lg:text-xl font-bold text-purple-700">
          <div
            className="flex lg:hidden cursor-pointer hover:animate-spin"
            onClick={() =>
              openNavbar === true ? setOpenNavbar(false) : setOpenNavbar(true)
            }
          >
            <GiHamburgerMenu className="text-purple-900" size={20} />
          </div>
          <FaHandsHelping />
          <h1 className="text">#BreakTheSilence</h1>
        </div>
        <div>
          <ul
            className={`hidden lg:flex items-center justify-between gap-8 text-sm font-semibold `}
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/#aboutUs"}>About Us</Link>
            </li>
            <li>
              <Link href={"/#resources"}>Resources</Link>
            </li>
            <li>
              <Link href={"/#contactUs"}>Service Providers</Link>
            </li>
            <li>
              <Link href={"/#contactUs"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="mr-3 lg:mr-0=">
          <Link
            href={"/get-help"}
            className="flex items-center gap-2 justify-center p-2 lg:p-3 w-24 lg:w-32 font-semibold rounded-full border border-purple-800 text-xs lg:text-sm"
          >
            <FaArrowAltCircleUp className="text-purple-600 text-lg lg:text-2xl rotate-12" />
            <span>Get Help</span>
          </Link>
        </div>
      </div>
      <div
        className={`${
          openNavbar ? "flex flex-col lg:hidden" : "hidden"
        } bg-white fixed top-0 left-0 w-72 p-4 shadow-md shadow-gray-50 h-screen z-50`}
      >
        <div className="flex justify-end py-3">
          <AiOutlineClose
            size={20}
            className="hover:animate-spin"
            onClick={() => setOpenNavbar(false)}
          />
        </div>
        <ul className={`flex flex-col gap-6 text-sm font-semibold `}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/#aboutUs"}>About Us</Link>
          </li>
          <li>
            <Link href={"/#resources"}>Resources</Link>
          </li>
          <li>
            <Link href={"/#contactUs"}>Service Providers</Link>
          </li>
          <li>
            <Link href={"/#contactUs"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/get-help"}>Get Help</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
