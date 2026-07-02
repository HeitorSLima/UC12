import './App.css'
import Botao from './components/Botao'
import Header from './components/Header'
import Hero from './components/Hero'
import { linksNav } from './data/conteudo'

function App() {

  return (
    <>
    <Header links={linksNav}/>
    <Hero titulo="Café especial, torrado com cuidado" subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor." imagem="https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg"/>
    </>
  )
}

export default App