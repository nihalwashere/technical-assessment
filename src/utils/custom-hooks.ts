import React from "react";

export const useMergeState = <T extends object>(
  initialState: T
): [T, (newState: Partial<T>) => void] => {
  const [state, setState] = React.useState<T>(initialState);

  const setMergedState = (newState: Partial<T>) =>
    setState((prevState) => ({ ...prevState, ...newState }));

  return [state, setMergedState];
};
