import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { RiTiktokLine } from 'react-icons/ri'
import style from "./style.module.css";

const Footer = () => {
  return (
    <div className={`bg-black px-6 md:px-16 py-10 flex flex-col md:flex-row w-full ${style.footer}`}>
      <div className={`text-gray-200 mr-5 md:mr-12 w-full md:w-7/12 md:text-left mb-4 md:mb-0`}>
        <p className='font-bold'>Hər növ zövqə uyğun ətirlərin sifarişi və çatdırılması</p>
        <p className='italic mb-1'>Sumqayıt şəhəri</p>
        <p className='italic mb-1'>+994 55 551 31 21</p>
        <p className='mb-1'><a href="">Odeur.az</a></p>
        <p className='italic'>Since 2024</p>
      </div>
      <div className={`flex flex-col w-full md:w-2/4 text-gray-200 text-left`}>
        <div className={`mb-4 mx-auto text-center md:text-left`}>
          <p>Bizimlə sosial şəbəkə üzərindən əlaqə saxlayaraq</p>
          <p>ətirlərimizin çeşidləri haqqında daha ətraflı məlumat əldə edə bilərsiniz</p>
        </div>
        <div className={`mx-auto flex justify-center md:justify-start`}>
          <FaWhatsapp className={`text-4xl text-slate-100`} />
          <FaInstagram className={`text-4xl mx-3 text-slate-100`} />
          <RiTiktokLine className={`text-4xl text-slate-100`} />
        </div>
      </div>
    </div>
  )
}

export default Footer
