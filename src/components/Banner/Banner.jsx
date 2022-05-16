import "./Banner.css";
function Banner() {
	return (
		<div className="banner">
			<div className="banner__info">
				<div className="banner__info__introduce">Hi, I am</div>
				<h1>Hung Nguyen</h1>
				<p>Full-stack Developer</p>
			</div>
			<img src="/profile-pic.png" alt="" />
		</div>
	);
}

export default Banner;
