import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  extraClass?: string;
}

function Tr({ children, extraClass }: Props) {
  return (
    <tr className={`text-center py-4 hover:bg-gray-50 ${extraClass}`}>
      {children}
    </tr>
  );
}

export default Tr;
