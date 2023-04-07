import React from 'react'

const NewGameBtn = ({newGame}) => {
  return (
    <div className='grid place-items-center'><button onClick={newGame} className="rounded-lg p-2 px-3 text-center text-[#f2e8c4] bg-[#4d2e0f] border-4 border-[#f2e8c4]">Nuevo Partido</button></div>
  )
}

export default NewGameBtn