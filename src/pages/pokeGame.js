import Pokeplay from '../components/pokeGameComponents/Pokeplay'

const Pokegame = () => {
  return (
    <div className="content">
      <h1>Pokegame</h1>
      <br></br>
      <div className="row">
        <div className="col-12">
          <div className="Pokegame">
            <Pokeplay />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokegame;