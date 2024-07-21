import React from 'react'
import odeur from '../../images/odeur_5.jpeg'


const Header = () => {
  return (
    <div className={`bg-black h-80 md:h-[450px] w-full`}>
      <div className={`relative h-full`}>
        <img 
          src={odeur}
          className={`h-80 md:h-[450px] w-full`}
        />
      </div>
      <hr />
    </div>
  )
}

export default Header