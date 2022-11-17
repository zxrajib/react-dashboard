import axios from "axios"

const localStorageData =
  typeof window !== "undefined" ? localStorage.getItem("_jwtToken") : ""

const HTTP = axios.create({
  baseURL: process.env.SERVER_URL,
})

export const setAuthToken = (token: any) => {
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const setFormAuthResponse = (res: Record<string, any>) => {
  localStorage.setItem("_jwtToken", res.data.payload.access_token)
  localStorage.setItem("_user", res.data.payload.user)
}

setAuthToken(localStorageData)
export default HTTP
