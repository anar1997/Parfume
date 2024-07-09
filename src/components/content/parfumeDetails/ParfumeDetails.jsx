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
    notes: "",
  })

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Ensure +994 remains at the beginning and prevent further changes
      if (value.startsWith('+994')) {
        const phoneNumber = value.slice(0, 5) + value.slice(5).replace(/\D/g, '').slice(0, 9);
        setFormData({ ...formData, [name]: phoneNumber });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  }

  if (!perfume) {
    return <div>Ətir tapılmadı!</div>;
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
                Telefon Nömrəniz
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={13} // +994 + 9 digits = 13 characters
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Sifariş Miqdarı(qram ilə)
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
            <div className={`mt-4`}>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Qeydlər
              </label>
              <textarea
                type="text"
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className='mt-4 bg-gray-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'
            >
              <a href={`https://wa.me/+994504331975/?text=${encodeURIComponent(
                `Sifariş: <strong>${perfume.name}</strong>\nAd: <strong>${formData.name}</strong>\nTelefon: <strong>${formData.phone}</strong>\nSifariş miqdarı: <strong>${formData.quantity}</strong>`
              )}`}
                target="_blank"
                rel="noopener noreferrer">
                Sifariş edin
              </a>
            </button>
          </form>
        ) : (
          <div className="mt-4 text-green-700">
            <p>Sifarişiniz alındı!</p>
            <p>Ad: {formData.name}</p>
            <p>Telefon nömrəniz: {formData.phone}</p>
            <p className='mb-4'>Sifariş miqdarı: {formData.quantity}</p>
            <p>Qeydləriniz: {formData.notes}</p>
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