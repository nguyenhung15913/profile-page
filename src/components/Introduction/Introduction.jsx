import "./Introduction.css";

function Introduction() {
	return (
		<div className="introduction">
			<div className="introduction__container">
				<h1>Let Me Introduce Myself</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic
					fuga deserunt quas molestiae ipsam magni ducimus, dolorum voluptates,
					quos facilis quibusdam impedit doloribus. Ratione quasi dolorem
					maiores aperiam laudantium! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Eaque sunt odit dicta vero tempora dignissimos
					fugiat, iusto quae numquam a.
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
