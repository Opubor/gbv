import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  extraClass?: String;
}

function Td({ children, extraClass }: Props) {
  return <td className={`py-2 ${extraClass}`}>{children}</td>;
}

export default Td;
