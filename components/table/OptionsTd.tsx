import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function OptionsTd({ children, ...props }: Props) {
  return (
    <td className="flex justify-center items-center gap-2 pt-1">{children}</td>
  );
}

export default OptionsTd;
