import React from "react"
import Footer from "../shared/footer/footer"
import Header from "../shared/header/header"
import Sidebar from "../shared/sidebar/sidebar"

type PropType = {
  children: React.ReactNode
}

const WithAuth: React.FC<PropType> = ({ children }) => {
  return (
    <div className="admin-template">
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default WithAuth
