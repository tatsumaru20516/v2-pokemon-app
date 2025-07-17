import "./Card.css";

const Card = ({ pokemon }) => {
	return (
		<div className="card">
			<h2 className="cardName">{pokemon.name}</h2>
			<img src={pokemon.sprites.front_default} alt={`${pokemon.name}の画像`} />
			
			<div className="cardInfo">
				<p>Height: {pokemon.height}</p>
				<p>Weight: {pokemon.weight}</p>
				<p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
			</div>
		</div>
	)
}

export default Card