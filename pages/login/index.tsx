import React from "react"
import WithoutAuth from "../../components/layouts/withoutAuth"
import Login from "../../components/partials/login/Login"

const LoginPage = () => {
  return <Login />
}
LoginPage.PageLayouts = WithoutAuth
export default LoginPage
