import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = { name: string; email: string; message: string }

export default function Contact(){
  const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm<FormData>()
  const onSubmit = async (data:FormData) => {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://api-placeholder.example.com'
    try{
      await fetch(`${apiUrl}/contact`, { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
      alert('Mensagem enviada (simulação)')
    }catch{
      alert('Falha ao enviar (simulação)')
    }
  }
  return (
    <section className="card smooth max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-primary-700 mb-4">Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input {...register('name', { required: true })} className="w-full p-2 border rounded smooth" />
          {errors.name && <p className="text-red-500 text-sm">Nome é obrigatório</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input {...register('email', { required: true })} className="w-full p-2 border rounded smooth" />
          {errors.email && <p className="text-red-500 text-sm">Email é obrigatório</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Mensagem</label>
          <textarea {...register('message', { required: true })} className="w-full p-2 border rounded smooth" />
          {errors.message && <p className="text-red-500 text-sm">Mensagem é obrigatória</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded bg-primary-600 text-white smooth hover:scale-105">Enviar</button>
      </form>
    </section>
  )
}
