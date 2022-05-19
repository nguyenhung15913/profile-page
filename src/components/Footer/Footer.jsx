import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<h1>Are You Ready To Start Your Project Now?</h1>
			<a
				href="mailto:nguyenhung15913@gmail.com"
				className="btn primary footer__btn"
			>
				Contact Me
			</a>
			<p> &copy; 2022 Hung Nguyen.all right reserved</p>
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
	);
}

export default Footer;
