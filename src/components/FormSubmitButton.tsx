"use client";

import React, { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FromSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FromSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`btn-primary btn ${className}`}
      {...props}
    >
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}
