import React from 'react'

import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import logo from "../starter-code/assets/shared/logo.svg"
const Header = () => {
  return (
    <>
    <header className="header d-flex align-items-center justify-betwen">
    <div className="py-5">
    <NavLink to="/">
    <img src={logo} alt="space"/>

    </NavLink>
    </div>
    </header>
    </>
  )
}

export default Header
