import "./BlogCard.css";

function BlogCard() {
	return (
		<div className="blog-card">
			<div className="blog-card__container">
				<a a href="" className="blog-card__single">
					<img
						src="https://hcti.io/v1/image/53d25654-90d9-4112-b6aa-49424d0e6932"
						alt=""
					/>
					<div className="blog-card__item">
						<div className="blog-card__item__date">21 Jan, 2016</div>
						<div className="blog-card__item__title">
							First Time Being a Sheriff
						</div>
						<div className="blog-card__item_description">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Reprehenderit, optio.
						</div>
						<div className="blog-card__item__link">
							<a>READ MORE</a>
						</div>
					</div>
				</a>
				<a href="" className="blog-card__single">
					<img
						src="https://hcti.io/v1/image/53d25654-90d9-4112-b6aa-49424d0e6932"
						alt=""
					/>
					<div className="blog-card__item">
						<div className="blog-card__item__date">21 Jan, 2016</div>
						<div className="blog-card__item__title">
							First Time Being a Sheriff
						</div>
						<div className="blog-card__item_description">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Reprehenderit, optio.
						</div>
						<div className="blog-card__item__link">READ MORE</div>
					</div>
				</a>
			</div>
		</div>
	);
}

export default BlogCard;
