import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import SkillCard from "./components/SkillCard/SkillCard";
import Section from "./components/Section/Section";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
function App() {
	return (
		<>
			<Banner />
			<Menu />
			<div className="container">
				<About />
			</div>
			<Section name="Skills" />
			<div className="container">
				<SkillCard />
			</div>
			<Section name="Experience" />
			<div className="secondary">
				<div className="container">
					<ExperienceCard />
				</div>
			</div>
		</>
	);
}

export default App;
