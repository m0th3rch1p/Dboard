import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { useMemo } from "react"
import Layout from "scenes/layout";
import Dashboard  from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin"
import Login from "scenes/login"


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
  return (<div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/breakdown" element={<Breakdown />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  </div>);
}

export default App;
