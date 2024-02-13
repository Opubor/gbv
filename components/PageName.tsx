import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

interface Props {
  page1: string;
  page2: string;
  page1Link: string;
  page2Link: string;
}

function PageName({ page1, page2, page1Link, page2Link }: Props) {
  return (
    <div className="flex justify-start items-center gap-2 mb-4 mt-6 lg:mt-2">
      <div>
        <Link
          href={page1Link}
          className="bg-themeColor hover:bg-darkTheme px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-white"
        >
          {page1}
        </Link>
      </div>
      <div>
        <Link
          href={page2Link}
          className="bg-white hover:bg-purple-200 px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-themeColor"
        >
          {page2}
        </Link>
      </div>
    </div>
  );
}

export default PageName;
