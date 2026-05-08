"use client";

import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  loadingText?: string;
}

export default function LoadingButton({
  loading = false,
  children,
  loadingText = "Loading...",
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`flex items-center justify-center gap-2 transition-all duration-300 ${
        disabled || loading ? "opacity-60 cursor-not-allowed" : ""
      } ${props.className || ""}`}
    >
      {loading ? (
        <>
          <div className="w-4 h-4">
            <LoadingSpinner size="sm" />
          </div>
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}
