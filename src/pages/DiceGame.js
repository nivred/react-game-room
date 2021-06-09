import RollDice from '../components/diceComponents/RollDice'
import './DiceGame.css'

const DiceGame = () => {
  return (
    <div className="content">
      <h1>Dice Game</h1>
      <hr></hr>

      <div className="DiceGame">
        <RollDice />
      </div>
    </div>
  )
}

export default DiceGame;