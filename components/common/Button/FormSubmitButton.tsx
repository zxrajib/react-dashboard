import { Button, CircularProgress } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

type Props = {
  isLoading: boolean
  loadingText: string
  buttonText: string
  variant?: "contained" | "outlined"
  fullWidth?: boolean
}

const FormSubmitButton: React.FC<Props> = ({
  isLoading = false,
  loadingText = "Loading, Please wait",
  buttonText = "save",
  variant = "contained",
  fullWidth = false,
}) => {
  return (
    <Button
      type="submit"
      variant={variant}
      disabled={isLoading}
      fullWidth={fullWidth}
    >
      {isLoading ? (
        <Box component={"span"} display="flex" alignItems={"center"} gap={1}>
          <CircularProgress size={15} color="inherit" />
          {loadingText}
        </Box>
      ) : (
        buttonText
      )}
    </Button>
  )
}

export default FormSubmitButton
