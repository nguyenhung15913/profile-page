import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import SkillCard from "./components/SkillCard/SkillCard";
import Section from "./components/Section/Section";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import EducationCard from "./components/EducationCard/EducationCard";
import BlogCard from "./components/BlogCard/BlogCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Footer from "./components/Footer/Footer";

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
			<div className="secondary mb4rem">
				<div className="container">
					<ExperienceCard />
				</div>
			</div>
			<Section name="Project" />
			<div className="secondary mb4rem">
				<div className="container">
					<ProjectCard />
				</div>
			</div>
			<Section name="Education" />
			<div className="container">
				<EducationCard />
			</div>
			<Section name="Blog" />
			<div className="secondary">
				<div className="container">
					<BlogCard />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
