import React, { useState } from 'react'

const Content = () => {
    const initialPerfumes = [
        { name: 'Chanel No. 5', price: '10 manat' },
        { name: 'Dior', price: '15 manat' },
        { name: 'Chanel No. 6', price: '10 manat' },
        { name: 'Chanel No. 7', price: '10 manat' },
        { name: 'Chanel No. 8', price: '10 manat' },
        { name: 'Dior No. 2', price: '15 manat' },
        { name: 'Dior No. 3', price: '10 manat' },
        { name: 'Dior No. 4', price: '25 manat' },
        { name: 'Dior No. 5', price: '20 manat' },
    ]

    const [perfumes, setPerfumes] = useState(initialPerfumes);
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value);

        const filteredPerfumes = initialPerfumes.filter(perfume =>
            perfume.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
        setPerfumes(filteredPerfumes);
    }

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
                {perfumes.map((perfume) => (
                    <div className={`flex flex-col items-center w-2/4 h-20 rounded-lg shadow-md brightness-125 contrast-200hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300  bg-gray-500 mb-5 mx-auto`}>
                        <h2 className={`my-auto italic text-xl text-orange-300`}>{perfume.name}</h2>
                        <p className={`my-auto text-neutral-300`}>{perfume.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content