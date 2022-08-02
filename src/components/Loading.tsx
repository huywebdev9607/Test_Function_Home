import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";
import AuthLayout from "./Layout/Auth";
import MainLayout from "./Layout/DashboardLayout";
import './loading.modules.css'

type Props = {
  // layout?: string;
  loading: boolean;
};

export const LoadingContent = () => {
  return (
    <div className="loadingio-spinner-ripple-fh4eg2on52n">
      <div className="ldio-ophl2acpcc">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Loading = ({ loading  }: Props) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        filter: "blur(0.5)",
        backgroundColor:"transparent",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loading}
      onClick={() => {}}
    >
      <LoadingContent/>
    </Backdrop>
  );
};

export default Loading;
