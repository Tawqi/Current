import { useState } from 'react'

function NavBar() {

  return (
    <>
      <nav className="flex flex-row justify-between pt-2 pb-2 pr-5 pl-5 items-center shadow">
      <h1 className="text-center text-2xl font-bold">The Omuk-Tomuk</h1>
      <div className="flex flex-row justify-between gap-8">
        <ul className="flex flex-row justify-between gap-5 text-xl">
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Socials</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div className="flex flex-row justify-between gap-5 items-center text-xl">
          <span className="fas fa-magnifying-glass "></span>
          <span className="fas fa-cart-shopping "></span>
        </div>
      </div>
      </nav>

    </>
  )
}

export default NavBar