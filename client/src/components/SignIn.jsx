import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

const Signin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Sign In
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        onBackdropClick={handleBackdropClick}
      >
        <Box
          onClick={handleBackdropClick}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          width="100%"
        >
          <Box
            position="relative"
            width={400}
            height={450}
            bgcolor="transparent"
            borderColor="rgba(255, 255, 255, 255, 0.5)"
            borderRadius={20}
            style={{
              WebkitBackdropFilter: "blur(500px)",
              backdropFilter: "blur(500px)"
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{padding: "20px", border: 1, borderColor: "primary", borderRadius: "16px"}}>
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
                <Box
                  mt={3}
                  display="flex"
                  alignItems="center"
                  textAlign={"center"}
                >
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
                    <Link href="#" underline="always">
                      Sign Up Here!
                    </Link>{" "}
                    or{" "}
                    <Link href="#" underline="always">
                      Reset your password
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Signin;
