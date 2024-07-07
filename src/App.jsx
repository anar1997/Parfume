import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Parfume from './pages/parfume/Parfume'
import QRCodeComponent from './QrCode'
import ParfumeDetails from './components/content/parfumeDetails/ParfumeDetails'
import { initialPerfumes } from './components/InitialPerfumes'

function App() {
  // const menuUrl = 'https://www.halal-navi.com/'

  return (
    <div className='App'>
       {/* <h1 className={`font-bold text-3xl mt-10`}>Ətir çeşidləri</h1>
      <QRCodeComponent url={menuUrl}/> */}
      <Routes>
        <Route path='/' element={<Outlet/>}>
            <Route path='' element={<Parfume/>}/>
            <Route path=':id' element={<ParfumeDetails perfumes={initialPerfumes}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
