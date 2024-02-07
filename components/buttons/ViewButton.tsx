import Link from "next/link";
import React, { ReactNode } from "react";
import { AiOutlineEye } from "react-icons/ai";

interface Props {
  children?: ReactNode;
  href: string;
}

function ViewButton({ href }: Props) {
  return (
    <Link
      href={href}
      className="bg-yellow-400 font-semibold rounded-md text-white py-1 px-3"
    >
      {React.createElement(AiOutlineEye, { size: "20" })}
    </Link>
  );
}

export default ViewButton;
