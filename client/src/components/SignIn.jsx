import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

const Signin = ({ onResetClick, onRegisterClick }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        border: 1,
        borderColor: "primary",
        borderRadius: "16px"
      }}
    >
      <Typography variant="h1" color="primary">
        Login
      </Typography>
      <Box display="flex" flexDirection="column" mt={3}>
        <Box display="flex" alignItems="center">
          <PermIdentityRoundedIcon color="primary" />
          <TextField
            type="username"
            label="Username"
            aria-label="Username"
            required
            style={{ marginLeft: "10px" }}
          />
        </Box>
        <Box display="flex" alignItems="center" mt={3}>
          <VpnKeyRoundedIcon color="primary" />
          <TextField
            type="password"
            label="Password"
            aria-label="Password"
            required
            style={{ marginLeft: "10px" }}
          />
        </Box>
        <Box mt={3} display="flex" alignItems="center" textAlign={"center"}>
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Box ml={2}>
            <label>
              <input
                type="checkbox"
                style={{ marginRight: "5px" }}
                aria-label="Remember Me."
              />
              Remember Me.
            </label>
          </Box>
        </Box>
        <Box mt={3} className="register">
          <Typography variant="subtitle1" color="primary">
            <Link href="#" onClick={onRegisterClick} underline="always">
              Sign Up Here!
            </Link>{" "}
            or{" "}
            <Link href="#" onClick={onResetClick} underline="always">
              Reset your password
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
