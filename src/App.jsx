import './App.css'
import Parfume from './pages/parfume/Parfume'
import QRCodeComponent from './QrCode'

function App() {
  // const menuUrl = 'https://www.halal-navi.com/'

  return (
    <div className='App'>
       {/* <h1 className={`font-bold text-3xl mt-10`}>Ətir çeşidləri</h1>
      <QRCodeComponent url={menuUrl}/> */}
      <Parfume/>  
    </div>
  )
}

export default App
