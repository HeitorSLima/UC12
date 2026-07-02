import React from 'react'

function TituloSecao({subtitulo, titulo, descricao}) {
  return (
    <div className='max-w-xl mx-auto text-center mb-14'>
        <span className='font-body text-sm uppercase text-musgo font-medium'>
            {subtitulo}
        </span>

        <h2 className='font-display text-4xl font-semibold text-cafe-900 mt-3'>
            {titulo}
        </h2>

        {/*
            o código abaixo só mostra a descrição se ela existir, ou seja se eu passar a descrição para o componente ele aparece, senão ele te deixa no vácuo mesmo
        */}
        {
            descricao && (
                <p className='mt-4 text-cafe-600'>
                    {descricao}
                </p>
            )
        }
    </div>
  )
}

export default TituloSecao