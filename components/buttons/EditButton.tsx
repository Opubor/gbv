import Link from "next/link";
import React, { ReactNode } from "react";
import { AiOutlineEdit } from "react-icons/ai";

interface Props {
  children?: ReactNode;
  href: string;
}

function EditButton({ href }: Props) {
  return (
    <Link
      href={href}
      className="bg-green-500 font-semibold rounded-md text-white py-1 px-3"
    >
      {React.createElement(AiOutlineEdit, { size: "20" })}
    </Link>
  );
}

export default EditButton;
