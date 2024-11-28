import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholder?: string; // Placeholder text for the input
  search?: boolean; // Whether to show the search icon
  value?: string; // Controlled input value
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  className?: string; // Additional Tailwind CSS classes
};

export default function CustomInput({
  placeholder = "Enter text",
  search = false,
  value,
  onChange,
  className = "",
}: Props) {
  return (
    <div
      className={`flex items-center bg-[#2C2E334D] border border-black-4 rounded-lg px-4 h-10 ${className}`}
    >
      {search && <SearchIcon style={{ color: "#fff", marginRight: "8px" }} />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-white outline-none placeholder-gray-500"
      />
    </div>
  );
}
