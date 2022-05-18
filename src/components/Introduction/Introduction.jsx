import "./Introduction.css";

function Introduction() {
	return (
		<div className="introduction">
			<div className="introduction__container">
				<h1>Let Me Introduce Myself</h1>
				<p>
					I am Harry, currently graduated from Seneca College. My major is
					Computer Programming and Analysis. I have been into Web Development
					since the first day I started learning code. My strength is front-end
					web development and I also have basic knowledge about back-end.
				</p>

				<h1>What can I do?</h1>
				<p>
					<ul>
						<li>
							Create a front-end website based on a designed template (such as
							Photoshop, Figma, etc.)
						</li>
						<li>Create a website with both client side and server</li>
						<li>Integrate a website with database such as MongoDB and MySQL</li>
						<li>Integrate API with a website</li>
					</ul>
				</p>
				<div className="introduction__buttons">
					<a href="" className="btn primary white">
						Download CV
					</a>
					<a href="" className="btn secondary">
						Contact Me
					</a>
				</div>
				<div className="introduction__social-media">
					<a href="">
						<i className="introduction__social-media__icon fa-brands fa-facebook-f"></i>
					</a>
					<a href="">
						<i className="introduction__social-media__icon fa-brands fa-twitter"></i>
					</a>
					<a href="">
						<i className="introduction__social-media__icon fa-brands fa-github"></i>
					</a>
					<a href="">
						<i className="introduction__social-media__icon fa-brands fa-skype"></i>
					</a>
					<a href="">
						<i className="introduction__social-media__icon fa-brands fa-google-plus-g"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
