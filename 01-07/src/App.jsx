import './App.css'
import Botao from './components/Botao'
import Depoimento from './components/Depoimento'
import Header from './components/Header'
import Hero from './components/Hero'
import TituloSecao from './components/TituloSecao'
import CardProduto from './components/cardProduto'
import { linksNav } from './data/conteudo'

function App() {

  return (
    <>
    <Header links={linksNav}/>
    <Hero titulo="Café especial, torrado com cuidado" subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor." imagem="https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg"/>
    <TituloSecao subtitulo="Cardápio" titulo="Nossos produtos"/>
    <CardProduto nome="Café" descricao="café é bom" preco="R$ 9,99" imagem="https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg"/>
    <Depoimento texto={"o cafe da grao eh bom d+ mt daora gostei"} autor={"Herobrine"} cargo={"assombração"}/>
    </>
  )
}

export default App