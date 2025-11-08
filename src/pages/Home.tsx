import React from 'react'
import { Link } from 'react-router-dom'

const hero = "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=80&auto=format&fit=crop"

export default function Home(){
  return (
    <section className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="card smooth">
          <h1 className="text-3xl font-bold text-primary-700">MediConnect</h1>
          <p className="mt-2 text-primary-600 text-lg">Transformando a saúde popular com tecnologia.</p>
          <p className="mt-4 text-gray-700 leading-relaxed">O MediConnect é uma plataforma web que conecta clínicas populares, médicos e pacientes de forma simples e acessível. Nosso objetivo é modernizar o agendamento de consultas, reduzir atrasos e oferecer mais transparência e eficiência no atendimento médico.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="px-4 py-2 rounded bg-primary-600 text-white smooth hover:scale-105">Entrar em contato</Link>
            <Link to="/about" className="px-4 py-2 rounded border border-primary-200 smooth hover:bg-primary-50">Saiba mais</Link>
          </div>
        </div>
        <div className="card smooth overflow-hidden">
          <img src={hero} alt="Hospital" className="hero-img" />
        </div>
      </div>
    </section>
  )
}
