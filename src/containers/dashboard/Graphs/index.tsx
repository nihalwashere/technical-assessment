import CustomLineChart from "components/CustomLineChart";
import { ChartDataItemType, ChartTickerOptionsItemType } from "types";

// Data for the chart
const data: Array<ChartDataItemType> = [
  {
    month: "Apr",
    value: 20000,
    tooltip: { percentage: "0%", target: "above" },
  },
  {
    month: "May",
    value: 40000,
    tooltip: { percentage: "0%", target: "above" },
  },
  {
    month: "Jun",
    value: 60000,
    tooltip: { percentage: "0%", target: "above" },
  },
  {
    month: "Jul",
    value: 89600,
    tooltip: { percentage: "4.6%", target: "above" },
  },
  {
    month: "Aug",
    value: 80000,
    tooltip: { percentage: "0%", target: "above" },
  },
  {
    month: "Sep",
    value: 60000,
    tooltip: { percentage: "0%", target: "above" },
  },
  {
    month: "Oct",
    value: 80000,
    tooltip: { percentage: "0%", target: "above" },
  },
];

const TickerOptions: Array<ChartTickerOptionsItemType> = [
  { label: "Unsatisfied Demand %", value: "unsatisfied" },
  { label: "Satisfied Demand %", value: "satisfied" },
  { label: "Total Revenue", value: "revenue" },
];

export default function Graphs() {
  const handleChangeTicker = (value: string) => {};

  return (
    <div>
      <div className="text-2xl font-semibold text-white-1">Graphs</div>
      <div className="mt-4">
        <CustomLineChart
          data={data}
          tickerOptions={TickerOptions}
          onChangeTicker={handleChangeTicker}
        />
      </div>
    </div>
  );
}
