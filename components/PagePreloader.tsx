import React from "react";
import { TbLoader3 } from "react-icons/tb";

function PagePreloader() {
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="text-3xl font-bold flex flex-col items-center">
        <h1 className="text-center text-themeColor">GBV</h1>
        <TbLoader3 className="animate-spin text-center text-themeColor" />
      </div>
    </div>
  );
}

export default PagePreloader;
