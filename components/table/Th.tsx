import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  extraClass?: string;
}

function Th({ children, extraClass }: Props) {
  return <th className={`py-2 ${extraClass}`}>{children}</th>;
}

export default Th;
