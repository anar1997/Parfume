import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { initialPerfumes } from '../InitialPerfumes';
import { Input, Pagination } from 'antd';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTiktokLine } from 'react-icons/ri';
import coverImage from "../../images/cover-31.avif";
import coverPerfume from "../../images/cover-43.avif";
import style from "./style.module.css";
import odeur from '../../images/odeur.jpeg'




const { Search } = Input;

const Content = () => {
    const initialPerfume = [...initialPerfumes]

    const [perfumes, setPerfumes] = useState(initialPerfume);
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 50;

    const handleChange = (e) => {
        setSearchTerm(e.target.value);

        const filteredPerfumes = initialPerfumes.filter(perfume =>
            perfume.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
        setPerfumes(filteredPerfumes);
    }

    const indexOfLastPerfume = currentPage * perPage;
    const indexOfFirstPerfume = indexOfLastPerfume - perPage;
    const currentPerfumes = perfumes.slice(indexOfFirstPerfume, indexOfLastPerfume);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={`min-h-screen ${style.mainCover}`} style={{
            // backgroundImage: `url(${coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div id='cards' className={`pb-8`}>
                <div className={`flex mx-auto w-full mb-8 ${style.socials}`}>
                    <div className={`mx-auto flex flex-row my-6`}>
                        <a href="https://wa.me/qr/HQCLKXGTHA5NL1"  target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className={`text-4xl text-black`} />
                        </a>
                        <FaInstagram className={`text-4xl mx-3 text-black`} />
                        <RiTiktokLine className={`text-4xl text-black`} />
                    </div>
                </div>
                <div className='mx-4'>
                <div className={`mx-auto max-w-md`}>
                    <input
                        type='text'
                        placeholder='Parfüm axtar...'
                        value={searchTerm}
                        onChange={handleChange}
                        className="p-2 w-full border border-gray-300 rounded-lg mb-4"
                    />
                </div>
                </div>
                {currentPerfumes.map((perfume) => (
                    <div className='mx-4'>

                    <NavLink key={perfume.id} to={`/${perfume.id}`} className={`${style.perfumeNav} flex flex-col items-center w-2/4 h-20 rounded-lg shadow-md brightness-125 contrast-200hover:-translate-y-1 hover:cursor-pointer hover:scale-110  duration-300 mb-5 mx-auto`}
                        style={{
                            backgroundImage: `url(${coverPerfume})`,    
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h2 className={`my-auto italic text-xl font-bold ${style.perfumeName}`}>{perfume.name}</h2>
                        <p className={`my-auto ${style.perfumePrice}`}>{perfume.price}</p>
                    </NavLink>
                    </div>
                ))}

                <div className="flex justify-center mt-4">
                    <Pagination
                        current={currentPage}
                        total={perfumes.length}
                        pageSize={perPage}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                        className="bg-slate-200 rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Content