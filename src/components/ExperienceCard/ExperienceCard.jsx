import "./ExperienceCard.css";

function ExperienceCard() {
	return (
		<div className="experience-card">
			<div className="experience-card__item">
				<h4>delivereh.</h4>
				<div className="experience-card__item__title-container">
					<h5 className="primary experience-card__item__title">
						Software Developer
					</h5>
				</div>

				<p className="experience-card__item__description">
					<ul>
						<li>Developed a full-stack delivery web application.</li>
						<li>Developed a full-stack delivery mobile application.</li>
					</ul>
				</p>
				<div className="experience-card__date-container">
					<div className="experience-card__date primary">05/2021-09/2021</div>
				</div>
			</div>

			<div className="experience-card__item">
				<h4>Telescope (open source)</h4>
				<div className="experience-card__item__title-container">
					<h5 className="primary experience-card__item__title">Contributor</h5>
				</div>

				<p className="experience-card__item__description">
					<ul>
						<li>Worked on current issues</li>
						<li>Developed front-end mobile application.</li>
						<li>
							Developed and fixed bugs with teams on Slack and Microsoft Teams
						</li>
					</ul>
				</p>
				<div className="experience-card__date-container">
					<div className="experience-card__date primary">2014-2016</div>
				</div>
			</div>
		</div>
	);
}

export default ExperienceCard;
