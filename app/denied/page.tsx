import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-red-600">Access Denied</h1>
      <Link href={"/auth/login"} className="text-blue-600 text-sm">
        Sign in to continue
      </Link>
    </div>
  );
}

export default Page;
