"use client";
import cn from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";
import { useController } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: any;
  rules?: any;
}

export const LegacyInput = ({
  className,
  name,
  control,
  rules,
  ...rest
}: Props) => {
  const {
    field: { ref, ...fields },
    fieldState: { invalid, isTouched, isDirty, error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <input
        className={cn([
          "ps-3 py-6 w-full rounded-lg text-[#111729] font-medium",
          className,
          { "border-red-400": isTouched && invalid },
        ])}
        {...rest}
        {...fields}
        ref={ref}
      />
      {isTouched && invalid && (
        <div className="text-red-400">{error?.message}</div>
      )}
    </div>
  );
};
