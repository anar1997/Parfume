import QRCode from 'qrcode.react'
import React from 'react'

const QRCodeComponent = ({ url }) => {
  return (
    <div>
        <QRCode className={`mx-auto mt-6 mb-4`} value={url}/>
        <p className={`text-lg mt-5`}>Qr kodu skan edin.</p>
    </div>
  )
}

export default QRCodeComponent