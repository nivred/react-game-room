import RollDice from '../components/diceComponents/RollDice'
import './DiceGame.css'

const DiceGame = () => {
  return (
    <div className="DiceGame">
      <h1>Dice Game</h1>
      <hr></hr>

      <div className="">
        <RollDice />
      </div>
    </div>
  )
}

export default DiceGame;