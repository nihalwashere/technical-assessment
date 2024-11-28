import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomSelect from "components/CustomSelect";
import CustomTooltip from "components/CustomTooltip";
import { ChartDataItemType, ChartTickerOptionsItemType } from "types";

type Props = {
  data: Array<ChartDataItemType>;
  tickerOptions: Array<ChartTickerOptionsItemType>;
  onChangeTicker: (value: string) => void;
};

export default function CustomLineChart({
  data,
  tickerOptions,
  onChangeTicker,
}: Props) {
  return (
    <div className="w-full bg-black-2 p-4 rounded-lg border border-grey-3 text-white">
      {tickerOptions?.length && (
        <div className="mb-4 w-full flex justify-end">
          <CustomSelect
            options={tickerOptions}
            onChange={onChangeTicker}
            className="w-64"
          />
        </div>
      )}

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />

          <XAxis
            dataKey="month"
            stroke="#FFFFFF" // X-axis label color
            fontWeight={500}
            tick={{ fill: "#FFFFFF" }} // X-axis tick color
          />

          <YAxis
            stroke="#FFFFFF" // Y-axis label color
            tick={{ fill: "#FFFFFF" }} // Y-axis tick color
            fontWeight={500}
            tickFormatter={(value) => `$${value / 1000}K`} // Format USD amounts
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            dataKey="value"
            stroke="#C8E972" // Line color
            strokeWidth={2}
            dot={{ stroke: "#C8E972", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
