import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Personajes</Link>
        <Link to="/characterfilter">Filtrado de personajes</Link>
      </ul>
    </nav>
  )
}

export default Nav