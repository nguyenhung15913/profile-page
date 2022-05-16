import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<h1>Are You Ready To Start Your Project Now?</h1>
			<a href="" className="btn primary footer__btn">
				Contact Me
			</a>
			<p> &copy; 2022 Hung Nguyen.all right reserved</p>
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
	);
}

export default Footer;
