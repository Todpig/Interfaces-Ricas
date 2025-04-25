"use client";

interface ButtonProps {
  onClick?: () => void;
  variants?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  onClick,
  variants = "primary",
  size = "medium",
  disabled = false,
  children,
  className,
  type,
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 px-4 py-2 rounded hover:cursor-pointer";
  const variantStyles =
    variants === "primary"
      ? "bg-[#171717] text-white hover:opacity-80"
      : variants === "secondary"
      ? "bg-gray-200 text-black hover:opacity-80"
      : "bg-transparent text-black hover:bg-gray-100";

  const sizeStyles =
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base";

  return (
    <button
    type={type}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
