import React from 'react'
import { NavLink } from 'react-router-dom'

import "../index.css"

export default function Nav() {
  return (
        <div className="navi">
          <nav className="nav-home">
            <NavLink exact to="/"><img className="favicon" src="favicon.ico" alt="temporary logo" /></NavLink>
          </nav>
          <nav className="brackets">
            <NavLink exact activeStyle={{ color: '#4f8751' }} to="/about">About</NavLink>
            <NavLink exact activeStyle={{ color: '#4f8751' }} to="/projects">Projects</NavLink>
            <NavLink exact activeStyle={{ color: '#4f8751' }} to="/contact">Contact</NavLink>
          </nav>
        </div>
  )
}
