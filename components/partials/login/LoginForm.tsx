import { Box, Grid, Typography } from "@mui/material"
import React, { useState } from "react"
import InputField from "../../common/FormItem/InputField"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import FormSubmitButton from "../../common/Button/FormSubmitButton"
import { LOGIN_API } from "./api/list"
import HTTP, { setFormAuthResponse } from "../../../Utils/APIConfig"
import useErrorHandler from "../../../hooks/errorHandleHooks"

interface IFormInputs {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required()

const LoginForm = () => {
  const [submittingForm, setSubmittingForm] = useState(false)
  const handleError = useErrorHandler()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IFormInputs) => {
    console.log("d", data, HTTP)
    setSubmittingForm(true)
    HTTP.post(LOGIN_API, data)
      .then((res) => {
        console.log("res", res)
        setFormAuthResponse(res)
        setSubmittingForm(false)
        window.location.href = "/admin"
      })
      .catch((err) => {
        console.log("err", err)
        handleError({
          err: err,
        })
      })
  }

  return (
    <Box>
      <Typography>Sign in</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputField
              label="Email"
              type="email"
              register={register("email")}
              errors={errors?.email}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Passowrd"
              type="password"
              register={register("password")}
              errors={errors?.password}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSubmitButton
              fullWidth={true}
              isLoading={submittingForm}
              buttonText={"Sign In"}
              loadingText="Sign in, Please Wait .."
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default LoginForm
