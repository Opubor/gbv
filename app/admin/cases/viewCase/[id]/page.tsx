import React from "react";
import { getCase } from "@/services/case";
import { FaBook } from "react-icons/fa";
import { BsPerson, BsPersonArmsUp } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BiBookHeart } from "react-icons/bi";
import CaseFile from "./CaseFile";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const caseFile = await getCase(params.id);

  return <CaseFile caseFile={caseFile} />;
}

export default Page;
