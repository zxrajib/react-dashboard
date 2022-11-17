import { TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"

const useStyles = makeStyles({
  inputField: {
    width: "100%",
    "& label": {
      fontSize: "14px",
    },
  },
})
type InputFieldProps = {
  label: string
  value?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  errors?: any
  helperText?: string
  type?: string
  disabled?: boolean
  required?: boolean
  multiline?: boolean
  size?: "small" | "medium"
  variant?: "outlined" | "standard" | "filled"
  styles?: object
  fullWidth?: boolean
  min?: number
  max?: number
  register?: any
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onBlur,
  onKeyPress,
  errors,
  helperText,
  type,
  disabled,
  required,
  multiline,
  size,
  variant,
  styles,
  fullWidth,
  min,
  max,
  register,
}) => {
  const classes = useStyles()
  let inputProps = {}
  if (min || max) {
    inputProps = {
      min,
      max,
    }
  }
  return (
    <TextField
      className={`${classes.inputField}`}
      label={label}
      {...register}
      variant={variant}
      size={size}
      type={type}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      value={value}
      multiline={multiline}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      sx={styles}
      error={errors}
      helperText={errors?.message}
      InputProps={{
        inputProps: {
          ...inputProps,
        },
      }}
    ></TextField>
  )
}

export default InputField
