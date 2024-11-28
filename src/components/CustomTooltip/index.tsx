import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

export default function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const value = `$${(dataPoint.value / 1000).toFixed(2)}k`;
    const percentage = dataPoint.tooltip?.percentage || "0%";
    const targetStatus = dataPoint.tooltip?.target || "";

    return (
      <div className="bg-black-2 border border-grey-3 rounded-lg p-4  min-w-[150px]">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-white">{value}</div>

          <div className="text-xs text-right">
            <HelpOutlineIcon
              className="text-grey-5"
              style={{ fontSize: "18px" }}
            />
          </div>
        </div>

        <div className="flex items-center mt-2">
          <ArrowCircleUpOutlinedIcon
            className="text-green-4 mr-1"
            style={{ fontSize: "24px" }}
          />

          <span className="text-base font-normal text-grey-6">
            {percentage} {targetStatus} target
          </span>
        </div>
      </div>
    );
  }

  return null;
}
