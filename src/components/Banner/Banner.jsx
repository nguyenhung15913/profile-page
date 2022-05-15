import "./Banner.css";
function Banner() {
	return (
		<div className="banner">
			<div className="banner__info">
				<div className="banner__info__introduce">Hi, I am</div>
				<h1>Mister Perfect</h1>
				<p>Founder & CEO, (Personal Business)</p>
			</div>
			<img src="/profile-pic.png" alt="" />
		</div>
	);
}

export default Banner;
