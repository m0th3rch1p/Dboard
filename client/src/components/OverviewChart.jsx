import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api"
;
const OverviewChart = ({ isDashboard = false, view}) => {
    const theme = useTheme();
    const { data, isLoading} = useGetSalesQuery;
  return <div>OverviewChart</div>;
};

export default OverviewChart;
