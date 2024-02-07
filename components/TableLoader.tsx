import React from "react";
import { ImSpinner9 } from "react-icons/im";

function TableLoader() {
  return (
    <div className="px-4 pt-4 w-full flex flex-col text-themeColor justify-center items-center bg-white bg-opacity-70">
      <div className="animate-spin text-2xl font-bold">
        <ImSpinner9 size={"30"} />
      </div>
      <h1 className="text-xs">Loading</h1>
    </div>
  );
}

export default TableLoader;
