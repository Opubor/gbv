"use client";
import { editGetHelpSchema } from "@/schema/getHelp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  helpRequestId: any;
};

function MarkAsConnected({ helpRequestId }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(editGetHelpSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/getHelp/${helpRequestId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contacted: data?.contacted,
        }),
      });
      setLoading(false);

      if (response.status === 200) {
        toast.success("Update Successful", {
          position: "top-right",
        });
        // router.push("/admin/get-help");
        return router?.refresh();
      } else if (response?.status === 404) {
        return toast.error("Error during update", {
          position: "top-right",
        });
      }
    } catch (error) {
      return toast.error("Error in update", {
        position: "top-right",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button
        onClick={() => setValue("contacted", "Yes")}
        className="bg-blue-700 px-2 py-1 rounded-md text-white text-xs"
      >
        {loading ? "loading..." : "Mark as Contacted"}
      </button>
    </form>
  );
}

export default MarkAsConnected;
