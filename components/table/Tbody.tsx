import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Tbody({ children }: Props) {
  return <tbody className="text-sm">{children}</tbody>;
}

export default Tbody;
