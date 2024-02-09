"use client";
import { searchSchema } from "@/schema/search";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

function SearchReports() {
  const { push } = useRouter();
  const pathname = usePathname();
  const router = useRouter();
  const years = [
    { year: "2025" },
    { year: "2026" },
    { year: "2027" },
    { year: "2028" },
    { year: "2029" },
    { year: "2030" },
    { year: "2031" },
    { year: "2032" },
    { year: "2033" },
    { year: "2034" },
    { year: "2035" },
    { year: "2036" },
    { year: "2037" },
    { year: "2038" },
    { year: "2039" },
    { year: "2040" },
    { year: "2041" },
    { year: "2042" },
    { year: "2043" },
    { year: "2044" },
    { year: "2045" },
    { year: "2046" },
    { year: "2047" },
    { year: "2048" },
    { year: "2049" },
    { year: "2050" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const onSubmit = async (data: FieldValues) => {
    try {
      reset;

      if (data?.search !== "") {
        push(`${pathname}?year=${data?.search}`);
        return router.refresh();
      } else {
        push(`${pathname}?year=2024`);
        return router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className={""} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center gap-1">
          <label className="text-sm font-semibold">
            Select Reporting Year:
          </label>
          <select
            className="border-2 border-themeColor"
            {...register("search", {
              required: true,
              onChange: handleSubmit(onSubmit),
            })}
          >
            <option value={""}>2024</option>
            {years.map((data: any, i: any) => (
              <option
                key={i}
                value={data?.year}
                className="border-2 border-themeColor flex justify-between gap-2 items-center px-2 py-1 w-24 hover:bg-lightThemeColor"
              >
                {data?.year}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchReports;
