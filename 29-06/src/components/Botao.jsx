// assim criamos um componente reutilizável

function Botao({text}) {
  return (
    // em JSX, não existe 'class' e sim 'className'
    <button className="bg-green-700 px-2 py-1 rounded-lg text-white hover:bg-green-900 transition-all duration-400 cursor-pointer">{text}</button>
  )
}

export default Botao