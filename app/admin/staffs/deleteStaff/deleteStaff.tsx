"use client";
import DeleteButton from "@/components/buttons/DeleteButton";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

function DeleteStaff({ id }: Props) {
  const router = useRouter();
  const deleteStaff = async () => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      router.refresh();
      return toast.success("Staff deleted successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <DeleteButton onClick={() => deleteStaff()} />;
}

export default DeleteStaff;
