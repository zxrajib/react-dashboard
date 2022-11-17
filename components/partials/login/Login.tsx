import { Box } from "@mui/material"
import React from "react"
import LoginForm from "./LoginForm"

const Login = () => {
  return (
    <Box display={"flex"}>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="start"
        justifyContent={"center"}
        sx={{ backgroundColor: "#91e59f" }}
        width="40%"
        height={"100vh"}
      >
        Content
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        width="60%"
      >
        <LoginForm />
      </Box>
    </Box>
  )
}

export default Login
