import React from 'react'
import { NavLink } from 'react-router-dom'

import "../index.css"

export default function Nav() {
  return (
    <div>
      <nav className="flexContainer blueBackground">
          <ul className="nav flexItem flexStart">
              <li><NavLink exact activeClassName='active' to="/"><img className="favicon" src="favicon.ico" alt="temporary logo" /></NavLink></li>
          </ul>
          <ul className="nav flexContainer flexEnd">
              <li><NavLink exact activeClassName='active' className="flex-item" to="/about">About</NavLink></li>
              <li><NavLink exact activeClassName='active' className="flex-item" to="/projects">Projects</NavLink></li>
              <li><NavLink exact activeClassName='active' className="flex-item" to="/contact">Contact</NavLink></li>
          </ul>
      </nav>
    </div>
  )
}
