import React from 'react'
import "./NavBar.css"
import CardWidget from '../CartWidget/CardWidget'

const NavBar = () => {
  return (
  <header>
    <h1>
      MATEANDO
    </h1>
    <nav>
      <ul>
        <li>Mates</li>
        <li>Termos</li>
        <li>Yerberos</li>
        <li>SetMateros</li>
      </ul>
    </nav>
    <CardWidget/>
  </header>
  )
}

export default NavBar