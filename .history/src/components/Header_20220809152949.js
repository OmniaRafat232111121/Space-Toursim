import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"
const Header = () => {
  return (
    <>
    <header className="header d-flex align-items-center justify-betwen">
    <div className="py-6 mx-7">
    <NavLink to="/">
    <img src={logo} alt="space"/>
    </NavLink>
    </div>


    <nav id="navbar">
    <ul className="d-flex align-items-center">
    <li>
    <NavLink
    to="/"
    exact
    activeClassName="text-white border-b-4 border-white pb-7"
  >
  <span>00</span> Home
  </NavLink>
    </li>
    <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/destination"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>01</span> Destination
              </NavLink>
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/crew"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>02</span> Crew
              </NavLink>
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/technology"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>03</span> Technology
              </NavLink>
            </li>
    </ul>

    </nav>
    </header>
    </>
  )
}

export default Header
