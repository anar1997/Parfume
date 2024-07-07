import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { initialPerfumes } from '../InitialPerfumes';
import { Input, Pagination } from 'antd';

const { Search } = Input;

const Content = () => {
    const initialPerfume = [...initialPerfumes]

    const [perfumes, setPerfumes] = useState(initialPerfume);
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

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
        <div className={`min-h-screen`}>
            <div className={`my-8 px-4`}>
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
                    <NavLink key={perfume.id} to={`/${perfume.id}`} className={`flex flex-col items-center w-2/4 h-20 rounded-lg shadow-md brightness-125 contrast-200hover:-translate-y-1 hover:cursor-pointer hover:scale-110 hover:bg-slate-900 duration-300  bg-gray-500 mb-5 mx-auto`}>
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
                    />
                </div>
            </div>
        </div>
    )
}

export default Content