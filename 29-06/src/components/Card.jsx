function Card({foto, titulo, paragrafo, texto}) {
  return (
    <div className="card">
        <div className="card-titulo">
            <img src={foto}></img>
            <h2>{titulo}</h2>
        </div>

        <div className="card-conteudo">
            <p>{paragrafo}</p>
            <button>{texto}</button>
        </div>
    </div>
  )
}

export default Card