import axios, { AxiosError } from "axios"
import { useSnackbar } from "notistack"

type ErrorSetProps = {
  type: string
  message: string
}

type Props = {
  err: AxiosError
  setFieldError?: (field: string, errorState: ErrorSetProps) => void
}
const useErrorHandler = () => {
  const { enqueueSnackbar } = useSnackbar()

  return ({ err, setFieldError }: Props) => {
    if (err.response && err.response.data) {
      // @ts-ignore
      if (err.response.data.error) {
        // @ts-ignore
        const error = err.response.data.error
        if (error.fields.count > 0) {
          enqueueSnackbar("The given data was invalid.", { variant: "error" })
          // @ts-ignore
          error.fields.errors.forEach((ele) => {
            if (setFieldError) {
              setFieldError(ele.field, { type: "custom", message: ele.message })
            } else {
              enqueueSnackbar(ele.message, { variant: "error" })
            }
          })
        } else if (error.systems.count > 0) {
          const message = error.systems.errors[0].message
          //msgRef.current.error( message );
          enqueueSnackbar(message, { variant: "error" })
        } else {
          enqueueSnackbar("Failed. Please try again!", { variant: "error" })
        }
      } else {
        enqueueSnackbar("Failed. Please try again!", { variant: "error" })
      }
    } else {
      // @ts-ignore
      if (!axios.isCancel(err) && err.message === "Network Error") {
        enqueueSnackbar("Maybe you are offline. Please Try again!", {
          variant: "error",
        })
      } else {
        enqueueSnackbar("Failed. Please try again!", { variant: "error" })
      }
    }
  }
}

export default useErrorHandler
