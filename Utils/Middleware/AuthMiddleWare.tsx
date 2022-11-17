import React from "react"
import { EnumAdminUserTypes } from "../Enums/UserType"
import nextCookie from "next-cookies"
import redirect from "../../helpers/redirect.helpers"

type option = {
  Permission?: EnumAdminUserTypes[] | false
  option?: any
}

const AuthMiddleware = async (
  context: any,
  option: option = {
    Permission: false,
  }
) => {
  const { _jwtToken, _user } = nextCookie(context)
  if (!_jwtToken) {
    return redirect(context, "/login")
  }

  let props: any = {
    _user: _user || "",
  }
  return {
    props,
  }
}

export default AuthMiddleware
