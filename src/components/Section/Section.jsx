import "./Section.css";

function Section({ name }) {
	return (
		<div className="section">
			<h4 className="section__title btn primary">{name}</h4>
		</div>
	);
}

export default Section;
