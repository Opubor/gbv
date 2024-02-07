import { options } from "@/app/api/auth/[...nextauth]/option";
import { getUser } from "@/services/user";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBell, BiLogOut } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

async function AdminHeader() {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id as string);
  return (
    <div className="fixed w-full left-0 pr-2 lg:pr-4">
      <div className="bg-white rounded-3xl p-2 lg:p-4 flex items-center justify-between shadow-sm shadow-gray-200 ml-1 lg:ml-64">
        <div className="flex justify-start items-center gap-2 px-4">
          <BsPersonCircle size={30} />

          <div>
            <h1 className="text-md lg:text-lg font-semibold">
              Welcome {user?.firstName} {user?.lastName}
            </h1>
            <h2 className="text-sm font-light">Admin</h2>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Link
            href={"/"}
            className="text-sm p-2 flex items-center text-blue-600 underline gap-2"
          >
            <BiLogOut size={20} />
            <h1>Home Page</h1>
          </Link>
          {/* <div>{React.createElement(BiBell, { size: "20" })}</div>

          <div>{React.createElement(IoMdArrowDropdown, { size: "20" })}</div> */}
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
