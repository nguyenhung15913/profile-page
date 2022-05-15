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
					maiores aperiam laudantium!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt
					odit dicta vero tempora dignissimos fugiat, iusto quae numquam a.
				</p>
				<div className="introduction__buttons">
					<button className="btn primary white">Download CV</button>
					<button className="btn">Contact Me</button>
				</div>
				<div className="introduction__social-media">
					<i className="introduction__social-media__icon fa-brands fa-facebook-f"></i>
					<i className="introduction__social-media__icon fa-brands fa-twitter"></i>
					<i className="introduction__social-media__icon fa-brands fa-github"></i>
					<i className="introduction__social-media__icon fa-brands fa-skype"></i>
					<i className="introduction__social-media__icon fa-brands fa-google-plus-g"></i>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
