import "./SkillCard.css";

function SkillCard() {
	return (
		<div className="skill-card">
			<div className="skill-card__item">
				<h4 className="skill-card__item__title primary ">Professional</h4>
				<p style={{ marginTop: 20 }}>UI/UX design</p>
				<p style={{ marginTop: 20 }}>Web Application</p>
				<p style={{ marginTop: 20 }}>Mobile Application</p>
				<p style={{ marginTop: 20 }}>Writing</p>
				<p style={{ marginTop: 20 }}>Photography</p>
			</div>

			<div className="skill-card__item">
				<h4 className="skill-card__item__title primary">Personal</h4>
				<p style={{ marginTop: 20 }}>UI/UX design</p>
				<p style={{ marginTop: 20 }}>Web Application</p>
				<p style={{ marginTop: 20 }}>Mobile Application</p>
				<p style={{ marginTop: 20 }}>Writing</p>
				<p style={{ marginTop: 20 }}>Photography</p>
			</div>
		</div>
	);
}

export default SkillCard;
