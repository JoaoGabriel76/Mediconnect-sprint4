import React from 'react'
import { useParams } from 'react-router-dom'
export default ()=> { const { id } = useParams(); return (<section className='card smooth'><h2 className='text-xl font-semibold'>Detalhe {id}</h2><p className='text-sm text-gray-600'>Informações do item.</p></section>) }
