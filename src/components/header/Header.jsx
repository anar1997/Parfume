import React from 'react'
import odeur from '../../images/odeur.jpeg'


const Header = () => {
  return (
    <div className={`bg-black h-72 w-full shadow-2xl`}>
      <div className={`relative h-full`}>
        <img 
          src={odeur}
          className={`object-cover h-full w-full`}
        />
      </div>
    </div>
  )
}

export default Header