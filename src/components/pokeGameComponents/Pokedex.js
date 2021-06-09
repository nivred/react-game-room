import Pokecard from './Pokecard'
import './Pokedex.scss'

const Pokedex = (props) => {
  let title;
  if (props.isWinner) {
    title = <h2 className="Pokedex-winner">Winning Hand</h2>
  } else {
    title = <h2 className="Pokedex-loser">Losing Hand</h2>
  }
  return (
    <div className="Pokedex">
      {title}
      <p>Total Experience: {props.exp}</p>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
      </div>
    </div>
  )
}

export default Pokedex;