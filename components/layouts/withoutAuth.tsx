import React from "react"
import Footer from "../shared/footer/footer"
import Header from "../shared/header/header"
import Sidebar from "../shared/sidebar/sidebar"

type PropType = {
  children: React.ReactNode
}

const WithoutAuth: React.FC<PropType> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default WithoutAuth
