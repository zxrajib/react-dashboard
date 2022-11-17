import React from "react"
import Footer from "../shared/footer/footer"
import Header from "../shared/header/header"
import Sidebar from "../shared/sidebar/sidebar"

type PropType = {
  children: React.ReactNode
}

const withAuth: React.FC<PropType> = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      <Sidebar />
      <hr />
      <div>{children}</div>
      <hr />
      <Footer />
    </div>
  )
}

export default withAuth
