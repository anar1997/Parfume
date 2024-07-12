import React from 'react'
import odeur from '../../images/odeur2.jpg'


const Header = () => {
  return (
    <div className={`bg-black h-80 w-full shadow-2xl`}>
      <div className={`relative h-full`}>
        <img 
          src={odeur}
          className={`h-80 w-full`}
        />
      </div>
    </div>
  )
}

export default Header