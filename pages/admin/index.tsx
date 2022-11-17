import React from "react"
import AuthMiddleware from "../../Utils/Middleware/AuthMiddleWare"

const DashboardPage = () => {
  return <div>dashboardindex</div>
}

export default DashboardPage

export const getServerSideProps = async (context: any) =>
  AuthMiddleware(context)
