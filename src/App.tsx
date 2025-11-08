import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Integrantes from './pages/Integrantes'
import FAQ from './pages/FAQ'
import Item from './pages/Item'

export default function App(){
  return (
    <div className="min-h-screen bg-primary-50 text-gray-800">
      <header className="bg-white/90 backdrop-blur sticky top-0 z-30 shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="MediConnect" className="w-10 h-10 rounded" />
            <div>
              <div className="text-lg font-semibold">MediConnect</div>
              <div className="text-xs text-gray-500">Transformando a saúde popular</div>
            </div>
          </div>
          <nav className="space-x-4 text-sm">
            <Link to="/" className="smooth hover:text-primary-700">Home</Link>
            <Link to="/about" className="smooth hover:text-primary-700">Sobre</Link>
            <Link to="/integrantes" className="smooth hover:text-primary-700">Integrantes</Link>
            <Link to="/faq" className="smooth hover:text-primary-700">FAQ</Link>
            <Link to="/contact" className="smooth hover:text-primary-700">Contato</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/integrantes" element={<Integrantes/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/item/:id" element={<Item/>} />
        </Routes>
      </main>

      <footer className="border-t mt-8 border-primary-100 bg-white/60">
        <div className="container mx-auto p-6 text-sm text-gray-600 text-center">
           © {new Date().getFullYear()} MediConnect
        </div>
      </footer>
    </div>
  )
}
