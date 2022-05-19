import "./Menu.css";
function Menu() {
	return (
		<ul className="menu">
			<a href="#banner">
				<li className="menu__item">Home</li>
			</a>
			<a href="#about">
				<li className="menu__item">About</li>
			</a>
			<a href="#skills">
				<li className="menu__item">Skills</li>
			</a>
			<a href="#experience">
				<li className="menu__item">Experience</li>
			</a>
			<a href="#project">
				<li className="menu__item">Project</li>
			</a>
			<a href="#education">
				<li className="menu__item">Education</li>
			</a>
			<a href="#blog">
				<li className="menu__item">Blog</li>
			</a>
		</ul>
	);
}

export default Menu;
