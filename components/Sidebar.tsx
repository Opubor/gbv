"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineLogout,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { BsBoxes, BsCreditCard, BsPeople, BsSortDownAlt } from "react-icons/bs";
import { MdHouseSiding, MdOutlineCategory } from "react-icons/md";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaGiftsSolid, LiaShippingFastSolid } from "react-icons/lia";
import {
  IoGitPullRequestOutline,
  IoPeopleCircleOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBook, FaGifts, FaHandHoldingHeart } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { TbReport, TbUsersGroup } from "react-icons/tb";
import { signIn, signOut, useSession } from "next-auth/react";

function Sidebar() {
  const path = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);

  const navLink = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LuLayoutDashboard },
    {
      name: "Cases",
      path: "/admin/cases",
      icon: FaBook,
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: TbReport,
    },
    {
      name: "Service Providers",
      path: "/admin/agencies",
      icon: MdHouseSiding,
    },
    {
      name: "Staffs",
      path: "/admin/staffs",
      icon: TbUsersGroup,
    },
    {
      name: "Get Help Requests",
      path: "/admin/get-help",
      icon: IoGitPullRequestOutline,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: LuSettings,
    },
  ];

  return (
    <>
      <div
        className="fixed top-2 left-2 bg-gray-200 p-2 rounded-full z-50 lg:hidden"
        onClick={() =>
          openSidebar ? setOpenSidebar(false) : setOpenSidebar(true)
        }
      >
        <FaBarsStaggered size={20} className="text-themeColor font-semibold" />
      </div>
      <div
        className={`${
          openSidebar ? "block" : "hidden"
        } lg:block w-64 p-4 h-screen fixed z-40`}
      >
        <div className="bg-themeColor rounded-3xl pl-8 h-full">
          <div className="flex justify-start items-center gap-2 py-8">
            <FaHandHoldingHeart className="text-white" size={30} />

            <h1 className="text-white text-lg font-semibold">GBV Software</h1>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            {navLink?.map((link) => (
              <Link
                key={link.name}
                href={link?.path}
                className={`${
                  path === link.path
                    ? "text-themeColor bg-white rounded-tl-lg rounded-bl-lg"
                    : "text-white"
                } text-sm p-2 flex items-center gap-2`}
              >
                <div>{React.createElement(link?.icon, { size: "20" })}</div>
                <h1>{link.name}</h1>
              </Link>
            ))}
          </div>
          <div className={`p-2 flex items-center gap-2 text-white`}>
            <AiOutlineLogout size={20} />
            <button
              onClick={() => {
                signOut();
              }}
              className="text-sm hover:underline"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
