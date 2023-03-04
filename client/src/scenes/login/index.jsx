import React, { useState } from "react";
import Box from "@mui/material/Box";
import Signin from "components/Signin";
import Reset from "components/Reset";
import Register from "components/Register";

const Login = () => {
  const [showReset, setShowReset] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleResetClick = () => {
    setShowReset(true);
  };
  const handleRegisterClick = () => {
    setShowRegister(true);
  };
  return (
    <>
      <Box
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
          {showReset ? (
            <Reset onClose={() => setShowReset(false)} />
          ) : showRegister ? (
            <Register onClose={() => setShowRegister(false)} />
          ) : (
            <Signin
              onResetClick={handleResetClick}
              onRegisterClick={handleRegisterClick}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Login;
