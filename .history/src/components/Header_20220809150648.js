import React from 'react'

const Header = () => {
  return (
    <>
    <header className="header d-flex align-items-center justify-betwen">
    <div className="py-5">
    <NavLink to="/">
    <img src={logo} alt="space/>

    </NavLink>
    </div>
    </header>
    </>
  )
}

export default Header
