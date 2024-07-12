import React from 'react'
import odeur from '../../images/odeur2.jpg'
import style from "./style.module.css";



const Header = () => {
  return (
    <div className={`bg-black ${style.header} w-full shadow-2xl`}>
      <div className={`relative h-full`}>
        <img 
          src={odeur}
          className={`${style.img} w-full`}
        />
      </div>
    </div>
  )
}

export default Header