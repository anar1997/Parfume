import React from 'react'
import { useParams } from 'react-router-dom'

const ParfumeDetails = ({perfumes}) => {
  let {id} = useParams();
  
  const perfume = perfumes.find(p => p.id.toString() === id)

  if (!perfume) {
    return <div>Parfüm bulunamadı!</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="my-8 px-4 mx-auto max-w-md">
        <h1 className="text-3xl font-bold">{perfume.name}</h1>
        <p className="text-gray-700">{perfume.price}</p>
        <button className='mt-4 bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'>Sifariş edin</button>
      </div>
    </div>
  )
}

export default ParfumeDetails