import './App.css'
import { Header } from './components/HeaderComponent/HeaderComponent'
import { HomePage } from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='catalog' element={<CatalogPage />} />
        </Routes>
    </>
  )
}

export default App
