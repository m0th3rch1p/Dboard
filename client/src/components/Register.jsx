import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Signup = () => {
return (
    <Box sx={{padding: "20px", border: 1, borderColor: "primary", borderRadius: "16px"}}>
    <Typography variant="h1" color="primary">
      Sign Up
    </Typography>
    <Box display="flex" flexDirection="column" mt={3}>
      <Box display="flex" alignItems="center">
        <EmailRoundedIcon color="primary" />
        <TextField
          type="email"
          label="Email"
          aria-label="Email"
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
        <TextField
          type="password"
          label="Confirm Password"
          aria-label="Confirm Password"
          required
          style={{ marginLeft: "10px" }}
        />
      </Box>
      <Box
        mt={3}
        display="flex"
        alignItems="center"
        textAlign={"center"}
      >
        <Button variant="contained" color="primary">
          Create account
        </Button>
        <Box ml={2}>
          <label>
            <input
              type="checkbox"
              style={{ marginRight: "5px" }}
              aria-label="Sign me in automatically."
            />
            Sign me in automatically.
          </label>
        </Box>
      </Box>
      <Box mt={3} className="register">
        <Typography variant="subtitle1" color="primary">
          Already have an account? <Link href="/login" underline="always">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
)
}

export default Signup;