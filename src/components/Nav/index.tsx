import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemIcon from "@mui/material/ListItemIcon";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useMergeState } from "utils/custom-hooks";
import { UserType } from "types";

type NavItemType = {
  id: string;
  icon: any;
  title: string;
  path: string;
};

export const NAVS = [
  {
    id: "1",
    icon: HomeIcon,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: "2",
    icon: NotificationsIcon,
    title: "Notifications",
    path: "/dashboard",
  },
  {
    id: "3",
    icon: SettingsIcon,
    title: "Settings",
    path: "/dashboard",
  },
  {
    id: "4",
    icon: BackupIcon,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: "5",
    icon: SettingsIcon,
    title: "Settings",
    path: "/dashboard",
  },
];

type Props = {
  user: UserType;
  onLogout: () => void;
};

type StateType = {
  navs: NavItemType[]; // Adjust this type based on the structure of your navigation items
  selectedNav: (typeof NAVS)[number]; // The type of a single item from NAVS
  profileMenuAnchorEl: HTMLElement | null; // The anchor element or null
};

export default function DefaultNav({ user, onLogout }: Props) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [state, setState] = useMergeState<StateType>({
    navs: [],
    selectedNav: NAVS[0],
    profileMenuAnchorEl: null,
  });

  const handleNavChange = (nav: NavItemType) => {
    setState({ selectedNav: nav });
    navigate(`${nav.path}`);
  };

  const handleOpenProfileMenu = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    setState({ profileMenuAnchorEl: event.currentTarget });
  };

  const handleCloseProfileMenu = () => {
    setState({ profileMenuAnchorEl: null });
  };

  const handleLogout = () => {
    handleCloseProfileMenu();
    onLogout();
  };

  useEffect(() => {
    const mainNav = pathname.split("/")[1];

    const topNav = NAVS.find(
      (elem: NavItemType) => elem.path === `/${mainNav}`
    );

    if (topNav?.path) {
      setState({ selectedNav: topNav });
    }
  }, [pathname]);

  useEffect(() => {
    const navs = [...NAVS];

    setState({ navs });
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-20 max-w-[80px] min-h-full flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="my-8">
            <MenuOutlinedIcon />
          </div>

          <div className="w-full flex flex-col items-center">
            {state.navs.map((nav: NavItemType) => (
              <div
                key={nav.id}
                className={`w-10 h-10 rounded-[10px] flex justify-center items-center py-1 my-2 ${
                  state.selectedNav?.id === nav.id
                    ? "bg-black-3 border border-solid border-black-4"
                    : ""
                }`}
              >
                {nav?.icon && (
                  <Tooltip title={nav.title} placement="right">
                    <IconButton onClick={() => handleNavChange(nav)}>
                      <nav.icon
                        sx={{
                          color:
                            state.selectedNav?.id === nav.id
                              ? "#FFFFFF"
                              : "#858882",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div>
            <IconButton onClick={handleOpenProfileMenu}>
              <AccountCircleIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          </div>

          <Menu
            anchorEl={state.profileMenuAnchorEl}
            open={Boolean(state.profileMenuAnchorEl)}
            onClose={handleCloseProfileMenu}
            transformOrigin={{ horizontal: "left", vertical: "top" }}
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
          >
            <MenuItem>
              <div className="font-medium">Hey, {user?.displayName}</div>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
