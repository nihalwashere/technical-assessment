import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Option = {
  label: string; // Label displayed in the dropdown
  value: string; // Value associated with the option
};

type Props = {
  options: Option[]; // Array of options
  onChange?: (value: string) => void; // Callback when the value changes
  className?: string; // Optional additional Tailwind classes for styling
};

export default function CustomSelect({
  options,
  onChange,
  className = "",
}: Props) {
  return (
    <div className={`relative ${className}`}>
      <select
        className="bg-[#18181A80] text-white-2 font-medium border border-grey-4 rounded-md px-4 py-2 w-full appearance-none"
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ArrowDropDownIcon
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
        style={{ fontSize: "20px" }}
      />
    </div>
  );
}
