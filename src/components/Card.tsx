import "./card.css"

interface CardProps {
	monument: {
		name: string;
		description: string;
	};
}

function Card({ monument }: CardProps) {
	console.log("coucou", monument.name);
	return (
		<div className="card">
			<h2>{monument.name}</h2>
			<p>{monument.description}</p>
		</div>
	);
}

export default Card;
