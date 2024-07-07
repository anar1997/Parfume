import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Parfume from '../../../pages/parfume/Parfume';

const ParfumeDetails = ({ perfumes }) => {
  let { id } = useParams();

  const perfume = perfumes.find(p => p.id.toString() === id)

  const [formData, setFormData] = useState({
    name: "",
    phone: "+994",
    quantity: 1,
  })

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  }

  if (!perfume) {
    return <div>Parfüm bulunamadı!</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="my-8 px-4 mx-auto max-w-md">
        <h1 className="text-3xl font-bold">{perfume.name}</h1>
        <p className="text-gray-700">{perfume.price}</p>
        {!orderPlaced ? (
          <form onSubmit={handleSubmmit}>
            <div className={`mt-4`}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Adınız
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='mt-1 p-2 w-full border border-gray-300 rounded-lg'
              />
            </div>
            <div className={`mt-4`}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                telefon nömrəniz
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Sifariş miqdarı
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className='mt-4 bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'
            >
              Sifariş edin
            </button>
          </form>
        ) : (
          <div className="mt-4 text-green-700">
            <p>Sifarişiniz alındı!</p>
            <p>Ad: {formData.name}</p>
            <p>Telefon nömrəniz: {formData.phone}</p>
            <p className='mb-4'>Sifariş miqdarı: {formData.quantity}</p>
            <NavLink
              className='bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded' to="/">Ana səhifəyə qayıt</NavLink>
          </div>
        )}
        {/* <button className='mt-4 bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'>Sifariş edin</button> */}
      </div>
    </div>
  )
}

export default ParfumeDetails