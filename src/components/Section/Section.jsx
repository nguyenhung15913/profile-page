import "./Section.css";

function Section({ name, id }) {
	return (
		<div className="section" id={id}>
			<h4 className="section__title btn primary">{name}</h4>
		</div>
	);
}

export default Section;
