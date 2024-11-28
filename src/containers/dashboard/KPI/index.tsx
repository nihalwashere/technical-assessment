import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type Indicator = {
  title: string;
  description: string;
  metric: string;
};

const Indicators: Array<Indicator> = [
  {
    title: "Infrastructure Units",
    description: "This describes variable two and what the shown data means.",
    metric: "€421.07",
  },
  {
    title: "Charging Growth",
    description: "This describes variable two and what the shown data means.",
    metric: "33.07",
  },
  {
    title: "Localization change",
    description: "This describes variable two and what the shown data means.",
    metric: "21.9%",
  },
  {
    title: "Fleet growth",
    description: "This describes variable two and what the shown data means.",
    metric: "7.03%",
  },
];

export default function KPI() {
  return (
    <div>
      <div className="text-2xl font-semibold text-white-1">
        Key Performance Indicators
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        {Indicators.map((indicator: Indicator) => (
          <div
            key={indicator?.title}
            className="bg-black-3 rounded border border-solid border-black-4 w-full h-[230px] p-6 flex justify-center items-center"
          >
            <div>
              <div className="flex justify-between items-center">
                <div className="font-medium text-xl">{indicator?.title}</div>
                <HelpOutlineIcon
                  className="text-grey-5"
                  style={{ fontSize: "20px" }}
                />
              </div>

              <div className="text-grey-1 text-[12px] font-light mt-2">
                {indicator?.description}
              </div>

              <div className="font-bold text-3xl mt-6 text-right">
                {indicator?.metric}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
