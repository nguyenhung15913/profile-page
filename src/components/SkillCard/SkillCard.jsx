import "./SkillCard.css";
import SkillBar from "react-skillbars";

function SkillCard() {
	const skillsFrontEnd = [
		{ type: "React.js", level: 80 },
		{ type: "Angular.js", level: 50 },
		{ type: "Next.js", level: 50 },
		{ type: "Javascript", level: 80 },
		{ type: "HTML", level: 80 },
		{ type: "CSS", level: 80 },
		{ type: "Bootstrap", level: 70 },
		{ type: "JQuery", level: 50 },
		{ type: "Lodash", level: 50 }
	];

	const skillsBackend = [
		{ type: "Node.js", level: 80 },
		{ type: "Express.js", level: 80 },
		{ type: "Handlebar", level: 70 },
		{ type: "PHP", level: 50 },
		{ type: "Laravel", level: 50 }
	];

	const skillsDatabase = [
		{ type: "MongoDB", level: 50 },
		{ type: "Mongoose.js", level: 80 },
		{ type: "MySQL", level: 60 },
		{ type: "Sequelize", level: 80 }
	];

	const skillsMobile = [
		{ type: "React Native", level: 70 },
		{ type: "Java", level: 40 }
	];

	return (
		<div className="skill-card">
			<div className="skill-card__item">
				<h4 className="skill-card__item__title primary ">Front End</h4>
				<SkillBar skills={skillsFrontEnd} height={25} />
			</div>

			<div className="skill-card__item">
				<h4 className="skill-card__item__title primary">Back-end</h4>
				<SkillBar skills={skillsBackend} height={25} />
			</div>

			<div className="skill-card__item">
				<h4 className="skill-card__item__title primary">Database and ORM</h4>
				<SkillBar skills={skillsDatabase} height={25} />
			</div>

			<div className="skill-card__item">
				<h4 className="skill-card__item__title primary">Mobile Application</h4>
				<SkillBar skills={skillsMobile} height={30} />
			</div>
		</div>
	);
}

export default SkillCard;
