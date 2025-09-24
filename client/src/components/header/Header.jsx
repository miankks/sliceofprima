import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Välkommen till Slice Of Prima</h2>
            <p>Vi är så glada att få välkomna dig till Slice Of Prima. 
              Här får du njuta av god mat lagat med kärlek och glädje.
            </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header