import React from "react"
import WithoutAuth from "../../components/layouts/WithoutAuth"
import Login from "../../components/partials/login/Login"
import PublicMiddleware from "../../Utils/Middleware/PublicMiddleWare"

const LoginPage = () => {
  return <Login />
}
LoginPage.PageLayouts = WithoutAuth
export default LoginPage

export const getServerSideProps = async (context: any) =>
  PublicMiddleware(context)
