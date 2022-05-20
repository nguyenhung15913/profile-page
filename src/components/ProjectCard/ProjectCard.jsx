import "./ProjectCard.css";

function ProjectCard() {
	return (
		<div className="project-card">
			<div className="project-card__container">
				<img src="/blog.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Blog For Everyone</h1>
					<div className="blog-card__item_description">
						A full-stack website where you can write your own blogs as well as
						reading someone else's blogs. Users registration is available.
						React.js is used for front-end, and the server is implemented using
						Express.js which is also connected with MongoDB database to store
						user's information and blogs. This website is still under
						development.
					</div>
					<div className="project-card__footer">
						<div className="project-card__language__container">
							<div className="project-card__language primary">React.js</div>
							<div className="project-card__language primary">Context API</div>
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
			</div>

			<div className="project-card__container">
				<img src="/movie.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Showbuzz</h1>
					<div className="blog-card__item_description">
						A React.js front-end web application for users to see information
						about latest movies, series and TV shows, etc. Axios is used to
						fetch data from MovieDB API.
					</div>
					<div className="project-card__footer">
						<div className="project-card__language__container">
							<div className="project-card__language primary">React.js</div>
							<div className="project-card__language primary">MovieDB API</div>
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
			</div>

			<div className="project-card__container">
				<img src="/spotify.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Seneca Music</h1>
					<div className="blog-card__item_description">
						A website where users can look for new released albums or music from
						Spotify. Users registration is available and they can save their
						favourite music or album to their list. Artists information is
						available. The app is implemented using Angular.js and the backend
						is running using Node.js.
					</div>
					<div className="project-card__footer">
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
			<div className="project-card__container">
				<img src="/comfortplaces.png" alt="" />
				<div className="project-card__description">
					<h1 className="project-card__name">Comfort Places</h1>
					<div className="blog-card__item_description">
						A booking web application where users can choose book their
						favourite home stay in a specific location. Prices will be
						calculated based on the location, number of guests and how long they
						will stay. The receipt will be sent to their email after booking is
						successful. The site is implemented by Express.js and Express
						handlebar. MongoDB is the database to store user's information and
						rooms
					</div>
					<div className="project-card__footer">
						<div className="project-card__language__container">
							<div className="project-card__language primary">Handlebar</div>
							<div className="project-card__language primary">Node.js</div>
							<div className="project-card__language primary">Mongoose</div>
							<div className="project-card__language primary">MongoDB</div>
							<div className="project-card__language primary">Mail API</div>
						</div>
						<div className="project-card__link">
							<a href="https://comfortplaces.herokuapp.com/">
								<i className=" introduction__social-media__icon fa-solid fa-globe"></i>
							</a>
							<a href="https://github.com/nguyenhung15913/AirBNB-homestay-Project">
								<i className="introduction__social-media__icon fa-brands fa-github"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
