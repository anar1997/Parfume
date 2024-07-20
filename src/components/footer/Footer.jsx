import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { RiTiktokLine } from 'react-icons/ri'
import style from "./style.module.css";


const Footer = () => {
  return (
    <div className={`bg-black px-16 py-10 flex flex-row w-full ${style.footer}`}>
      <div className={`text-gray-200 mr-5 w-7/12 text-left`}>
        <p className='font-bold'>Hər növ zövqə uyğun ətirlərin sifarişi və çatdırılması</p>
        <p className='italic'>Sumqayıt şəhəri</p>
        <span className='italic'>+994 55 551 31 21</span>
        <p><a href="">Odeur.az</a></p>
        <p className='italic'>Since 2024</p>
      </div>
      <div className={`flex flex-col w-2/4`}>
        <div className={`mb-4 mx-auto`}>
          <h1 className={`text-slate-50 font-bold`}>
            Follow us on
          </h1>
          <div className={`text-slate-50 text-left`}>
            <p>Bizimlə sosial şəbəkə üzərindən əlaqə saxlayaraq</p>
            <p>ətirlərimizin çeşidləri haqqında</p>
            <p>daha ətraflı məlumat əldə edə bilərsiniz</p>
          </div>
        </div>
        <div className={`mx-auto flex flex-row`}>
          <FaWhatsapp className={`text-4xl text-slate-100`} />
          <FaInstagram className={`text-4xl mx-3 text-slate-100`} />
          <RiTiktokLine className={`text-4xl text-slate-100`} />
        </div>
      </div>
    </div>
  )
}

export default Footer