import React from "react";

type Props = {
  label?: string; // Text to display on the button
  icon?: React.ReactNode; // Icon component to display
  variant?: "default" | "primary" | "secondary" | "icon"; // Variants
  size?: "small" | "medium" | "large"; // Button sizes
  onClick?: () => void; // Click handler
  className?: string; // Additional custom classes
};

export default function CustomButton({
  label,
  icon,
  variant = "default",
  size = "medium",
  onClick,
  className = "",
}: Props) {
  // Common styles
  const baseStyles =
    "flex justify-center items-center rounded border border-solid font-medium";

  // Variant-specific styles
  const variantStyles = {
    default: "bg-black-3 text-white border-grey-4 shadow-custom-inset",
    primary: "bg-[#23291E] text-green-2 border-green-5 shadow-custom-inset",
    secondary: "bg-black-3 text-white border-black-4",
    icon: "bg-black-3 text-[#B9B9B9] border-black-4",
  };

  // Size-specific styles
  const sizeStyles = {
    small: "h-8 px-4 text-sm",
    medium: "h-10 px-6 text-base",
    large: "h-12 px-8 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}  ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className={`mr-${label ? "2" : "0"}`}>{icon}</span>}
      {label}
    </button>
  );
}
