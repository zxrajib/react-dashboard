import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import LoginForm from "./LoginForm"

const useClasses = makeStyles({
  loginField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loginInputField: {
    // background: 'white',
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    background: "white",
    padding: "60px",
    height: "350px",
    borderRadius: "10px 0px 0px 10px",
    opacity: "0.7",
  },
  loginBg: {
    display: "flex",
    // background: 'white',
    background: "linear-gradient(to left, #658083 10%,  #b1d1cc 70%)",
    height: "350px",
    borderRadius: "0px 10px 10px 0px",
    // opacity: '0.9',
  },
  iflogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

const Login = () => {
  const classes = useClasses()
  return (
    <Box
      display={"flex"}
      style={{
        backgroundImage: `url(img/login-bg.png)`,
        height: "100vh",
        opacity: ".9",
      }}
    >
      <Box
        p={8}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        height={"100vh"}
      >
        <Typography>
          <img
            src="img/minar.png"
            alt="gonoprojatontry bd logo"
            width="100%"
            height="500"
          />
        </Typography>
      </Box>
      <Box className={classes.loginField}>
        <Box className={classes.loginInputField}>
          <Box className={classes.logo}>
            <Typography>
              <img
                src="img/bd-logo.png"
                alt="gonoprojatontry bd logo"
                width="100"
                height="100"
              />
            </Typography>
          </Box>

          <Box className={classes.loginBg}>
            <Box className={classes.iflogo}>
              Logo
              {/* <img
                src="https://i.pinimg.com/originals/c7/93/ae/c793ae372886c450d55535211231204e.jpg"
                alt="Nature"
                width="50"
                height="80"
              /> */}
            </Box>
            <Box>
              <LoginForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    // <Box display={"flex"}>
    //   <Box
    //     display={"flex"}
    //     flexDirection="column"
    //     alignItems="start"
    //     justifyContent={"center"}
    //     sx={{ backgroundColor: "#91e59f" }}
    //     width="40%"
    //     height={"100vh"}
    //   >
    //     Content
    //   </Box>
    //   <Box
    //     display={"flex"}
    //     alignItems="center"
    //     justifyContent={"center"}
    //     width="60%"
    //   >
    //     <LoginForm />
    //   </Box>
    // </Box>
  )
}

export default Login
