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
					<a
						href="/Hung-Nguyen-Resume.pdf"
						className="btn primary white"
						download
					>
						Download CV
					</a>
					<a href="mailto:nguyenhung15913@gmail.com" className="btn secondary">
						Contact Me
					</a>
				</div>
				<div className="introduction__social-media">
					<a href="https://www.facebook.com/profile.php?id=100003242671333">
						<i className="introduction__social-media__icon fa-brands fa-facebook-f"></i>
					</a>

					<a href="https://github.com/nguyenhung15913">
						<i className="introduction__social-media__icon fa-brands fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/harry-nguyen-ba895a16a/">
						<i className="introduction__social-media__icon fa-brands fa-linkedin"></i>
					</a>
					<a href="mailto:nguyenhung15913@gmail.com">
						<i className="introduction__social-media__icon fa-brands fa-google-plus-g"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
