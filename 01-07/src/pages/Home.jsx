import React from 'react'
import Header from '../components/Header'
import { linksNav } from '../data/conteudo'
import Hero from '../components/Hero'
import TituloSecao from '../components/TituloSecao'

function Home() {
  return (
    <div>
        <Header links={linksNav}/>

        <Hero titulo="Café especial, torrado com cuidado" subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor." imagem="https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg"/>
        {/* Sobre */}
        <section id='sobre' className='py-24 px-6 bg-creme-claro'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
                <div className='flex-1 w-full h-72 rounded-2xl bg-cafe-900/5 border-2 border-dashed border-cafe-900 flex items-center justify-center'>
                    <img src="https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg" alt="Xícara de café especial servida na cafeteria Grão" className='rounded-xl w-full h-full object-cover shadow-xl'/>
                </div>

                <div className='flex-1'>
                    <span className='font-body text-sm uppercase text-musgo font-medium'>
                        Nossa história
                    </span>
                    <h2 className='font-display text-4xl font-semibold text-cafe-900 mt-3'>
                        Do produtor à xícara
                    </h2>

                    <p className='mt-4 text-cafe-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quia, possimus perferendis recusandae similique veritatis hic animi tempora non fugit ut magni impedit in nobis doloribus iusto itaque consequuntur vel!
                    </p>
                </div>
            </div>
        </section>
        {/* Cardápio */}
        <section id='cardapio' className='py-24 px-6'>
            <div className='max-w-6xl mx-auto'>
                <TituloSecao subtitulo='Cardápio' titulo='Nossos produtos' descricao='Todos os produtos passam pelo mesmo processo cuidadoso de torra dos grãos'/>
            </div>

            <div className='grid grid-cols-1 md-grid-cols-3 gap-6'></div>
        </section>
    </div>
  )
}

export default Home