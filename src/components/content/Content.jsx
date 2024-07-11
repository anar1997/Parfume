import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { initialPerfumes } from '../InitialPerfumes';
import { Input, Pagination } from 'antd';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTiktokLine } from 'react-icons/ri';
import coverImage from "../../images/cover-12.jpg";
import style from "./style.module.css";


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
            backgroundImage: `url(${coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div id='cards' className={`py-8 px-4`}>
                <div className={`flex mx-auto w-2/4 mb-6`}>
                    <div className={`mx-auto flex flex-row`}>
                        <FaWhatsapp className={`text-4xl`} />
                        <FaInstagram className={`text-4xl mx-3`} />
                        <RiTiktokLine className={`text-4xl`} />
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
                    <NavLink key={perfume.id} to={`/${perfume.id}`} className={`flex flex-col items-center w-2/4 h-20 rounded-lg shadow-md brightness-125 contrast-200hover:-translate-y-1 hover:cursor-pointer hover:scale-110 hover:bg-slate-900 duration-300  bg-teal-950 mb-5 mx-auto`}>
                        <h2 className={`my-auto italic text-xl text-orange-300`}>{perfume.name}</h2>
                        <p className={`my-auto text-neutral-300`}>{perfume.price}</p>
                    </NavLink>
                ))}

                <div className="flex justify-center mt-4">
                    <Pagination
                        current={currentPage}
                        total={perfumes.length}
                        pageSize={perPage}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Content