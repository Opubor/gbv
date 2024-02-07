import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function DeleteButton({ ...props }) {
  return (
    <div
      {...props}
      className="bg-red-500 cursor-pointer font-semibold rounded-md text-white py-1 px-3"
    >
      {React.createElement(AiOutlineDelete, { size: "20" })}
    </div>
  );
}

export default DeleteButton;
