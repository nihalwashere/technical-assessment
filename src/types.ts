export type UserType = {
  displayName: string;
  picture: string;
  email: string;
};

export type ChartDataItemType = {
  month: string;
  value: number;
  tooltip: {
    percentage: string;
    target: string;
  };
};

export type ChartTickerOptionsItemType = {
  label: string;
  value: string;
};
