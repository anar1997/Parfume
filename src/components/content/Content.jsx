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
        <div className={`min-h-screen pt-10 ${style.mainCover}`} style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div id='cards' className={`py-8 px-4`}>
                <div className={`flex mx-auto w-2/4 mb-6`}>
                    <div className={`mx-auto flex flex-row`}>
                        <FaWhatsapp className={`text-4xl text-white`} />
                        <FaInstagram className={`text-4xl mx-3 text-white`} />
                        <RiTiktokLine className={`text-4xl text-white`} />
                    </div>
                </div>
                <div className={`mx-auto max-w-md`}>
                    <input
                        type='text'
                        placeholder='Parfüm axtar...'
                        value={searchTerm}
                        onChange={handleChange}
                        className="p-2 w-full border border-gray-300 rounded-lg mb-4"
                    />
                </div>
                {currentPerfumes.map((perfume) => (
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