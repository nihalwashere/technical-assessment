import React from "react";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import IosShareIcon from "@mui/icons-material/IosShare";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BoltIcon from "@mui/icons-material/Bolt";
import EditVariablesDrawer from "./EditVariablesDrawer";
import Graphs from "./Graphs";
import KPI from "./KPI";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomTextField";

export default function DashboardContainer() {
  const [shouldShowEditVariablesDrawer, setShouldShowEditVariablesDrawer] =
    React.useState<boolean>(false);

  const handleOpenEditVariables = () => {
    setShouldShowEditVariablesDrawer(true);
  };

  const handleCloseEditVariables = () => {
    setShouldShowEditVariablesDrawer(false);
  };

  return (
    <div>
      <div className="pt-6 px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-5">
            <CustomButton
              label="Charging Stations"
              variant="secondary"
              size="medium"
            />

            <div className="w-fit h-10 px-5 flex justify-center items-center">
              Fleet Sizing
            </div>

            <div className="w-fit h-10 px-5 flex justify-center items-center">
              Parking
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <CustomInput search placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="border-l border-t rounded-[5px] border-black-4 mt-8">
        <div className="p-6 md:p-12">
          {/* top section */}
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-[32px] font-bold">
                <BoltIcon sx={{ height: 36, width: 36 }} className="mr-1" />
                Charging Station
              </div>

              <div className="flex items-center gap-4 mt-8 md:mt-0">
                <CustomButton
                  icon={<HistoryOutlinedIcon sx={{ color: "#B9B9B9" }} />}
                  variant="icon"
                  className="px-[9px]"
                />

                <CustomButton
                  label="Edit Variables"
                  onClick={handleOpenEditVariables}
                  variant="secondary"
                  className="text-base"
                />

                <CustomButton
                  icon={<IosShareIcon sx={{ color: "#B9B9B9" }} />}
                  variant="icon"
                  className="px-[9px]"
                />
              </div>
            </div>

            <div className="mt-12">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-semibold text-green-1">
                  <AutoAwesomeIcon
                    sx={{ width: 18, height: 18 }}
                    className="mr-2"
                  />
                  Best Scenario Results
                </div>
              </div>

              <div className="px-6 py-[15px] border rounded-[6px] border-green-4 mt-8 flex justify-between items-center">
                <div className="text-base font-medium text-green-2">
                  The best found configuration based on profit is characterized
                  by 11 zones (max) with charging stations and 48 total number
                  of poles.
                </div>

                <div>
                  <MoreHorizIcon sx={{ color: "#C8E972" }} />
                </div>
              </div>

              <div className="px-6 py-[15px] border rounded-[6px] border-green-4 mt-8 flex justify-between items-center">
                <div className="text-base font-medium text-green-3">
                  The best found configuration based on satisfied demand is
                  characterized by 11 zones (max) with charging stations and 48
                  total number of poles.
                </div>

                <div>
                  <MoreHorizIcon sx={{ color: "#C8E972" }} />
                </div>
              </div>
            </div>
          </div>

          {/* bottom section */}
          <div className="block w-full lg:flex gap-8 mt-10">
            {/* left side */}
            <div className="lg:w-3/5">
              <Graphs />
            </div>

            {/* right side */}
            <div className="mt-12 lg:w-2/5 lg:mt-0">
              <KPI />
            </div>
          </div>
        </div>
      </div>

      {shouldShowEditVariablesDrawer && (
        <EditVariablesDrawer
          open={shouldShowEditVariablesDrawer}
          onClose={handleCloseEditVariables}
        />
      )}
    </div>
  );
}
