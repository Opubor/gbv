import Login from "@/components/Login";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

function Page() {
  return (
    <div className="max-h-screen">
      <div className="flex flex-col xl:flex-row justify-center gap-2 xl:gap-16 items-center h-screen px-4 xl:px-44">
        <div className="pt-4 lg:pt-0 pb-4 lg:pb-0 w-full lg:w-2/4 flex flex-col justify-center lg:justify-start items-center lg:items-start">
          <FaHandHoldingHeart className="text-5xl" />
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold">
            GBV SOFTWARE
          </h1>
          <p className="text-xs xl:text-sm mt-2 text-center lg:text-left">
            ~Seamless Solutions for Gender-Based Management Excellence~
          </p>
          <Image
            src="/unity1.jpg"
            alt="logo"
            className=" hidden lg:flex"
            width={3000}
            height={0}
            priority
          />
        </div>
        <div className="w-full lg:w-2/4">
          <h1 className="text-xl lg:text-3xl font-extrabold text-center mb-6">
            Sign In
          </h1>

          {/* ===Form=== */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Page;
