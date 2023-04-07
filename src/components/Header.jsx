import NewGameBtn from "./NewGameBtn";

const Header = ({newGame}) => {

  return (
    <div className='text-[#f2e8c4] bg-[#4d2e0f] rounded-bl-3xl rounded-br-3xl border-4 border-[#f2e8c4]'>
        <div className='py-3 flex justify-around items-center '>
            <h1 className='text-xl'>Truco Anotador</h1>
            <NewGameBtn newGame={newGame}/>
        </div>
    </div>
  )
}

export default Header