import React from 'react'
import { useState } from 'react'

function Contador() {
    const [cliques, setCliques] = useState(0)

    function mais(){
        setCliques(cliques + 1)
    }
    function menos(){
        setCliques(cliques - 1)
    }
    function reset(){
        setCliques(0)
    }

  return (
    <div className='flex justify-center items-center'>
        <div className='bg-white border-black border-1 rounded-sm px-2 py-1'>{cliques}</div>
        <button className='bg-white border-clack border-1 rounded-sm px-2 py-1 hover:bg-black hover:text-white' onClick={menos} disabled={cliques <= 0}>-</button>
        <button className='bg-white border-clack border-1 rounded-sm px-2 py-1 hover:bg-black hover:text-white' onClick={reset}>Reset</button>
        <button className='bg-white border-clack border-1 rounded-sm px-2 py-1 hover:bg-black hover:text-white' onClick={mais}>+</button>
    </div>
  )
}

export default Contador