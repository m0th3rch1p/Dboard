import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Reset = () => {
  return (
    <Box style={{ backdropFilter: "blur(15px)"}}
      sx={{
        padding: "20px",
        border: 1,
        borderColor: "primary",
        borderRadius: "16px",
        alignItems: "center"
      }}
    >
      <Typography variant="h1" color="primary" style={{fontWeight: "bold"}}>
        Create Password
      </Typography>
      <Box display="flex" flexDirection="column" mt={3}>
        <Box display="flex" alignItems="center" mt={3}>
          <TextField
            type="password"
            label="Password"
            aria-label="Password"
            required
            style={{ marginLeft: "10px", marginTop: "-20px"}}
          />
          <TextField
            type="password"
            label="Confirm Password"
            aria-label="Confirm Password"
            required
            style={{ marginLeft: "10px", marginTop: "-20px" }}
          />
        </Box>
        <Button variant="contained" color="primary" style={{ marginTop: "10px"}}>
          Submit
        </Button>
        <Box mt={3} className="register">
        <Typography variant="subtitle1" color="primary">
          Go back to <Link href="/login" underline="always">
            Login
          </Link>?
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Reset;