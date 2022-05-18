import React from "react";

function EducationCard() {
	return (
		<div className="experience-card">
			<div className="experience-card__item">
				<h4>Computer Programming and Analysis</h4>
				<div className="experience-card__item__title-container">
					<h5 className="primary experience-card__item__title">
						Seneca College
					</h5>
				</div>

				<div className="experience-card__date-container">
					<div className="experience-card__date primary">2020-2022</div>
				</div>
			</div>

			<div className="experience-card__item">
				<h4>Hospitality</h4>
				<div className="experience-card__item__title-container">
					<h5 className="primary experience-card__item__title">
						Seneca College
					</h5>
				</div>

				<div className="experience-card__date-container">
					<div className="experience-card__date primary">2018-2020</div>
				</div>
			</div>

			<div className="experience-card__item">
				<h4>Chemical Engineering</h4>
				<div className="experience-card__item__title-container">
					<h5 className="primary experience-card__item__title">
						TDT University
					</h5>
				</div>

				<div className="experience-card__date-container">
					<div className="experience-card__date primary">2015-2018</div>
				</div>
			</div>
		</div>
	);
}

export default EducationCard;
