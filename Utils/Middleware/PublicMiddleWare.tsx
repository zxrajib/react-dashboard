import { type } from "os"
import React from "react"
import { EnumAdminUserTypes } from "../Enums/UserType"
import nextCookie from "next-cookies"
import redirectHelpers from "../../helpers/redirect.helpers"

type option = {
  Permission?: EnumAdminUserTypes[] | false
  callback?: any
}

const PublicMiddleware = async (
  context: any,
  option: option = {
    Permission: false,
  }
) => {
  const { _jwtToken, _user } = nextCookie(context)
  if (_jwtToken) {
    return redirectHelpers(context, "/admin")
  }

  let props: any = {
    _user: _user || "",
  }

  if (option.callback) {
    let headers: any = { "Content-Type": "application/json" }
    const pageData = await option.callback({
      ...context.query,
      headers: headers,
    })
    props = { ...props, ...pageData }
  }

  return {
    props,
  }
}

export default PublicMiddleware
