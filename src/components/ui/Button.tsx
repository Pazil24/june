"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-white hover:bg-gray-50 text-text-primary border border-gray-200 shadow-md",
    outlined:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
