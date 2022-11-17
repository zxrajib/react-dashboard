import axios from "axios"
import Cookies from "js-cookie"

const localStorageData =
  typeof window !== "undefined" ? localStorage.getItem("_jwtToken") : ""

const HTTP = axios.create({
  baseURL: process.env.SERVER_URL,
})

export const setAuthToken = (token: any) => {
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const setFormAuthResponse = (res: Record<string, any>) => {
  Cookies.set("_jwtToken", res.data.payload.access_token)
  Cookies.set("_user", JSON.stringify(res.data.payload.user))
}

setAuthToken(localStorageData)
export default HTTP
