"use client";
import DeleteButton from "@/components/buttons/DeleteButton";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

function DeleteCase({ id }: Props) {
  const router = useRouter();
  const deleteCase = async () => {
    try {
      const response = await fetch(`/api/case/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        toast.success("Case deleted Successful", {
          position: "top-right",
        });
        return router.refresh();
      } else if (response?.status === 404) {
        return toast.error("Error during delete", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <DeleteButton onClick={() => deleteCase()} />;
}

export default DeleteCase;
