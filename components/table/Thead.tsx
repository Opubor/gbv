import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Thead({ children }: Props) {
  return (
    <thead className="bg-gray-50 text-sm font-medium w-full">{children}</thead>
  );
}

export default Thead;
