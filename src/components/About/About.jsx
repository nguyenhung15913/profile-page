import Introduction from "../Introduction/Introduction";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./About.css";

function About() {
	return (
		<div className="about">
			<ProfileCard />
			<Introduction />
		</div>
	);
}

export default About;
