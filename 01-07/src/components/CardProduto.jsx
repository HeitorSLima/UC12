import React from 'react'

function CardProduto({nome, descricao, preco, imagem}) {
  return (
    <div className='bg-creme-claro rounded-2xl p-6 border border-cafe-900 hover:border-terracota transition'>
        <div className='w-1/4 h-40 rounded-2xl flex'>
            <img src={imagem} alt="Café" className='rounded-3xl w-full object-cover'/>
        </div>
        <h3 className='font-display text-xl font-semibold text-cafe-900'>
            {nome}
        </h3>
        <p className='mt-2 text-sm text-cafe-600'>
            {descricao}
        </p>
        <span className='mt-4 font-body font-semibold text-terracota'>
            {preco}
        </span>
    </div>
  )
}

export default CardProduto