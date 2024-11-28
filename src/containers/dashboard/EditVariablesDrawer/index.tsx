import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useMergeState } from "utils/custom-hooks";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useRef } from "react";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomTextField";

type Props = {
  open: boolean;
  onClose: () => void;
};

type VariableItemType = {
  label: string; // Display name of the variable
  value: string; // Unique identifier for the variable
};

type VariableCategoriesType = {
  [category: string]: VariableItemType[]; // Each key (category) maps to an array of Variable objects
};

const VariableCategories: VariableCategoriesType = {
  "Variable Category 1": [
    { label: "Carbon 1", value: "carbon_1" },
    { label: "Co2 Distribution", value: "co2_distribution" },
    { label: "Fleet Sizing", value: "fleet_sizing" },
  ],
  "Variable Category 2": [
    { label: "Parking Rate", value: "parking_rate" },
    { label: "Border Rate", value: "border_rate" },
    { label: "Request Rate", value: "request_rate" },
    { label: "Variable 1", value: "variable_1" },
    { label: "Variable 2", value: "variable_2" },
    { label: "Variable 3", value: "variable_3" },
  ],
  "Variable Category 3": [
    { label: "Variable 4", value: "variable_4" },
    { label: "Variable 5", value: "variable_5" },
    { label: "Variable 6", value: "variable_6" },
  ],
};

const isVariableSelected = (
  selectedVariables: Array<string>,
  variable: string
): boolean => selectedVariables.includes(variable);

type StateType = {
  selectedVariables: string[]; // Selected variables
  showContextFor: string | null; // Variable to show in context
};

export default function EditVariablesDrawer({ open, onClose }: Props) {
  const [state, setState] = useMergeState<StateType>({
    selectedVariables: [],
    showContextFor: null as string | null, // State to control which variable to show in the context
  });

  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null); // Ref to store hover timeout
  const isClicking = useRef(false); // Ref to track clicking state

  const handleHoverStart = (variable: string) => {
    if (isClicking.current) return; // Prevent hover if the user is clicking

    // @ts-ignore
    hoverTimeout.current = setTimeout(() => {
      setState({ showContextFor: variable }); // Show the context section
    }, 1500); // 1.5 seconds delay
  };

  const handleHoverEnd = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current); // Clear the hover timeout
      hoverTimeout.current = null;
    }

    setState({ showContextFor: null });
  };

  const handleMouseDown = () => {
    isClicking.current = true; // Mark as clicking
  };

  const handleMouseUp = () => {
    isClicking.current = false; // Reset clicking state
  };

  const handleSelectVariables = (variable: string) => {
    const _selectedVariables = [...state.selectedVariables];

    const variableIndex = _selectedVariables.findIndex(
      (elem) => elem === variable
    );

    if (variableIndex === -1) {
      // add variable
      _selectedVariables.push(variable);
    } else {
      // remove variable
      _selectedVariables.splice(variableIndex, 1);
    }

    setState({ selectedVariables: _selectedVariables });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "80%", // Default width for smaller screens
          height: "100%",
          background: "#0E0D0D",
          paddingBottom: 20,
          borderLeft: "solid 1px #525252",
          "@media (min-width: 1024px)": {
            width: "50%", // Width for large screens
          },
        },
      }}
    >
      <Slide
        direction="left"
        in={open}
        mountOnEnter
        unmountOnExit
        timeout={600}
      >
        <div className="bg-[#0E0D0D] min-h-screen border-l border-grey-3 p-8">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl font-medium">
              Edit Variables
            </div>

            <div>
              <IconButton onClick={onClose}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <CustomInput search placeholder="Search" />

            <CustomButton
              label="Autofill"
              icon={
                <AutoAwesomeIcon
                  className="text-grey-2"
                  sx={{ width: 18, height: 18 }}
                />
              }
              variant="default"
            />
            <CustomButton
              label="Rerun"
              icon={<RefreshOutlinedIcon sx={{ width: 18, height: 18 }} />}
              variant="primary"
            />
          </div>

          <div
            className={`${
              state.showContextFor
                ? "border-l border-r border-t rounded-tl-md rounded-tr-md h-[400px] overflow-y-scroll"
                : "border rounded-md"
            }  border-grey-3 p-8 mt-8`}
          >
            {Object.keys(VariableCategories).map(
              (category: string, index: number) => (
                <div key={category} className={`${index === 0 ? "" : "mt-10"}`}>
                  <div className="text-[#D5D5D5] font-medium text-lg">
                    {category}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-8">
                    {VariableCategories[category].map(
                      (variable: VariableItemType) => {
                        const isSelected = isVariableSelected(
                          state?.selectedVariables,
                          variable?.value
                        );

                        return (
                          <div
                            key={variable?.value}
                            className={`cursor-pointer border rounded-[20px] px-6 py-2 bg-[#282E16] ${
                              isSelected
                                ? "border-[#C9FF3B] text-[#C8E972FD]"
                                : "border-[#EEEEEE] text-[#D5D5D5]"
                            }`}
                            onMouseEnter={() =>
                              handleHoverStart(variable?.label)
                            }
                            onMouseLeave={handleHoverEnd}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onClick={() =>
                              handleSelectVariables(variable?.value)
                            }
                          >
                            <div className="flex justify-between items-center">
                              <div className="text-[#D5D5D5]">
                                {variable?.label}
                              </div>

                              <div>
                                <AutoAwesomeIcon
                                  sx={{ width: 14, height: 14, mx: 1 }}
                                />

                                {isSelected ? (
                                  <CheckIcon sx={{ width: 14, height: 14 }} />
                                ) : (
                                  <AddIcon sx={{ width: 14, height: 14 }} />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* context section */}
          <Fade in={!!state.showContextFor} timeout={{ enter: 800, exit: 300 }}>
            <div className="p-8 bg-black-2 border border-grey-3">
              <div className="text-white font-medium text-xl">
                {state.showContextFor}
                <InfoOutlinedIcon className="ml-4" />
              </div>

              <div className="text-grey-1 text-sm mt-4">
                But what truly sets Switch apart is its versatility. It can be
                used as a scooter, a bike, or even a skateboard, making it
                suitable for people of all ages. Whether you&apos;re a student,
                a professional, or a senior citizen, Switch adapts to your needs
                and lifestyle.
              </div>
            </div>
          </Fade>

          <div className="mt-8">
            <div className="bg-black-2 border border-grey-3 rounded-md px-6 py-3 flex justify-between items-center">
              <div className="text-green-4 font-medium text-xl">
                Primary Variables
              </div>

              <div className="border border-green-4 rounded-full w-fit px-2 py-1">
                <KeyboardArrowDownIcon sx={{ color: "#C8E972" }} />
              </div>
            </div>

            <div className="bg-black-2 border border-grey-3 rounded-md px-6 py-3 flex justify-between items-center mt-6">
              <div className="text-green-4 font-medium text-xl">
                Secondary Variables
              </div>

              <div className="border border-green-4 rounded-full w-fit px-2 py-1">
                <KeyboardArrowDownIcon sx={{ color: "#C8E972" }} />
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Drawer>
  );
}
