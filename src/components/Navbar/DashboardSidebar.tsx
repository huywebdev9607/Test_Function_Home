import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Nova from "src/assets/app_icon.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DevicesIcon from '@mui/icons-material/Devices';
import { NavItem } from "./navItem";
import AssessmentIcon from '@mui/icons-material/Assessment';
import {
  Link,
  useInRouterContext,
  useLocation,
  useRoutes,
} from "react-router-dom";

const items = [
  {
    href: "/home",
    icon: <DashboardIcon fontSize="large" />,
    title: "Dashboard",
  },
  {
    href: "/customers",
    icon: <DevicesIcon fontSize="large" />,
    title: "Devices",
  },
  {
    href: "/customers",
    icon: <AssessmentIcon fontSize="large" />,
    title: "Result",
  },
//   {
//     href: "/products",
//     icon: <ChairAltRounded fontSize="small" />,
//     title: "Products",
//   },
//   {
//     href: "/account",
//     icon: <ChairAltRounded fontSize="small" />,
//     title: "Account",
//   },
//   {
//     href: "/settings",
//     icon: <ChairAltRounded fontSize="small" />,
//     title: "Settings",
//   },
//   {
//     href: "/login",
//     icon: <ChairAltRounded fontSize="small" />,
//     title: "Login",
//   },
//   {
//     href: "/register",
//     icon: <ChairAltRounded fontSize="small" />,
//     title: "Register",
//   },
//   {
//     href: "/404",
//     icon: <ChairAltRounded fontSize="small" />,
//     title: "Error",
//   },
];

export const DashboardSidebar = (props: Props) => {
  const { open, onClose } = props;
  //   const router = useInRouterContext();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  //   useEffect(
  //     () => {
  //       if (false) {
  //         return;
  //       }

  //       if (open) {
  //         onClose?.();
  //       }
  //     },
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     [router.asPath]
  //   );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                paddingBlockStart: "25px",
                borderRadius: 1,
              }}
            >
              <Link to="/home">
                <img src={Nova} style={{ width: "40px", height: "40px" }} />
              </Link>
              <MenuOpenIcon
                sx={{
                  color: "#6B7280",
                  width: "24px",
                  height: "24px",
                }}
                onClick={()=>onClose()}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

type Props = {
  onClose: () => void;
  open: boolean;
};
