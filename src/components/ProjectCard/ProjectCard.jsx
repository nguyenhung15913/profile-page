import "./ProjectCard.css";

function ProjectCard() {
	return (
		<div className="project-card">
			<div className="project-card__container">
				<img src="/blog.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Blog For Everyone</h1>
					<div className="blog-card__item_description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
						adipisci accusamus iusto magni non incidunt ipsum! Adipisci veniam
						ullam distinctio repellendus eius aut quae natus modi quam,
						molestias neque!
					</div>
					<div className="project-card__language__container">
						<div className="project-card__language primary">React.js</div>
						<div className="project-card__language primary">Node.js</div>
						<div className="project-card__language primary">Axios</div>
						<div className="project-card__language primary">MongoDB</div>
						<div className="project-card__language primary">Node.js</div>
					</div>
					<div className="project-card__link">
						<a href="https://blog-for-everyone.netlify.app/">
							<i className=" introduction__social-media__icon fa-solid fa-globe"></i>
						</a>
						<a href="https://github.com/nguyenhung15913/blog-for-everyone">
							<i className="introduction__social-media__icon fa-brands fa-github"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="project-card__container">
				<img src="/movie.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Showbuzz</h1>
					<div className="blog-card__item_description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
						adipisci accusamus iusto magni non incidunt ipsum! Adipisci veniam
						ullam distinctio repellendus eius aut quae natus modi quam,
						molestias neque!
					</div>
					<div className="project-card__language__container">
						<div className="project-card__language primary">React.js</div>
						<div className="project-card__language primary">Node.js</div>
						<div className="project-card__language primary">Axios</div>
						<div className="project-card__language primary">Movie Api</div>
					</div>
					<div className="project-card__link">
						<a href="https://showbuzz.vercel.app/">
							<i className=" introduction__social-media__icon fa-solid fa-globe"></i>
						</a>
						<a href="https://github.com/nguyenhung15913/react-Showbuzz">
							<i className="introduction__social-media__icon fa-brands fa-github"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="project-card__container">
				<img src="/spotify.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Seneca Music</h1>
					<div className="blog-card__item_description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
						adipisci accusamus iusto magni non incidunt ipsum! Adipisci veniam
						ullam distinctio repellendus eius aut quae natus modi quam,
						molestias neque!
					</div>
					<div className="project-card__language__container">
						<div className="project-card__language primary">Angular.js</div>
						<div className="project-card__language primary">Node.js</div>
						<div className="project-card__language primary">Spotify Api</div>
					</div>
					<div className="project-card__link">
						<a href="https://spotify-project.vercel.app/home">
							<i className=" introduction__social-media__icon fa-solid fa-globe"></i>
						</a>
						<a href="https://github.com/nguyenhung15913/Spotify-project">
							<i className="introduction__social-media__icon fa-brands fa-github"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
