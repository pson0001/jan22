import React from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigationContainer">
      <div className="items">
        <Link to="/">
          <div className="home">
            <span>P</span>
          </div>
        </Link>
        <Link to="/pingme">
          <div className="pingme">
            <span>Ping me!</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Navigation
