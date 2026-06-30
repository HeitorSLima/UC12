import './App.css'
import Botao from './components/Botao'
import Card from './components/Card';

function App() {

function mostrarMensagem(){
  alert("botão 3 clicado");
}

  return (
    <div>
      <h1>Snowy News</h1>
      <Botao text={"Notícias"} background={"btn-primario"} func={() => alert("Botão 1 clicado")}/>
      <Botao text={"Assinaturas"} background={"btn-secundario"} func={() => alert("Botão 2 clicado")}/>
      <Botao text={"Sua conta"} background={"btn-desativado"} func={mostrarMensagem}/>

      <Card foto={"https://www.webmotors.com.br/imagens/prod/346603/PORSCHE_911_4.0_24V_H6_GASOLINA_GT3_RS_PDK_34660316561720761.webp"} titulo={"Porsche 911 GT3 RS"} paragrafo={"é um carro muito rápido"} texto={"clique para concordar"}/>
    </div>
  )
}

export default App