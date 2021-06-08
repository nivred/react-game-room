import Game from '../components/ticTacToeComponents/Game'

const TicTacToe = () => {
  return (
    <div className="content">
      <h1>Tic-Tac-Toe</h1>
      <hr></hr>

      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
          <Game />
        </div>
      </div>
    </div>
  )
}

export default TicTacToe;