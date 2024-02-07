import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Table({ children }: Props) {
  return (
    <div className="bg-white rounded-lg py-4 w-full overflow-scroll lg:overflow-hidden">
      <table className="w-full">{children}</table>
    </div>
  );
}

export default Table;
