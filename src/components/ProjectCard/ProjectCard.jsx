import "./ProjectCard.css";

function ProjectCard() {
	return (
		<div className="project-card">
			<div className="project-card__container">
				<img
					src="https://hcti.io/v1/image/53d25654-90d9-4112-b6aa-49424d0e6932"
					alt=""
				/>
				<div className="project-card__description">
					<h1 className="project-card__name">Blog Post</h1>
					<div className="blog-card__item_description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
						adipisci accusamus iusto magni non incidunt ipsum! Adipisci veniam
						ullam distinctio repellendus eius aut quae natus modi quam,
						molestias neque!
					</div>
					<div className="project-card__language__container">
						<div className="project-card__language primary">React.js</div>
						<div className="project-card__language primary">Node.js</div>
					</div>
					<div className="project-card__link">
						<a href="">
							<i className=" introduction__social-media__icon fa-solid fa-globe"></i>
						</a>
						<a href="">
							<i className="introduction__social-media__icon fa-brands fa-github"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="project-card__container">
				<img
					src="https://hcti.io/v1/image/53d25654-90d9-4112-b6aa-49424d0e6932"
					alt=""
				/>
				<div className="project-card__description">
					<h1 className="project-card__name">Blog Post</h1>
					<div className="blog-card__item_description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
						adipisci accusamus iusto magni non incidunt ipsum! Adipisci veniam
						ullam distinctio repellendus eius aut quae natus modi quam,
						molestias neque!
					</div>
					<div className="project-card__language__container">
						<div className="project-card__language primary">React.js</div>
						<div className="project-card__language primary">Node.js</div>
					</div>
					<div className="project-card__link">
						<a href="">
							<i className=" introduction__social-media__icon fa-solid fa-globe"></i>
						</a>
						<a href="">
							<i className="introduction__social-media__icon fa-brands fa-github"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
