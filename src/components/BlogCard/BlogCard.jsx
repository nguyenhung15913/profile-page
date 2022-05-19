import "./BlogCard.css";
import axios from "axios";
import { useEffect, useState } from "react";
function BlogCard() {
	const [posts, setPosts] = useState([]);
	const fetchBlogs = async () => {
		try {
			const res = await axios.get(
				"https://dev.to/api/articles?username=nguyenhung15913"
			);
			console.log(res);
			setPosts(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchBlogs();
		console.log(posts);
	}, [posts]);

	if (!posts || posts === undefined || posts.length <= 0) {
		return <div>Blogs are not ready yet.</div>;
	}

	return (
		<div className="blog-card">
			<div className="blog-card__container">
				<a href={posts[29].url} className="blog-card__single">
					<img src={posts[29].social_image} alt="" />
					<div className="blog-card__item">
						<div className="blog-card__item__date">
							{new Date(posts[29].published_at).toDateString()}
						</div>
						<div className="blog-card__item__title">{posts[29].title}</div>
						<div className="blog-card__item_description">
							{posts[29].description}
						</div>
						<div className="blog-card__item__link">READ MORE</div>
					</div>
				</a>
				<a href={posts[25].url} className="blog-card__single">
					<img src={posts[25].social_image} alt="" />
					<div className="blog-card__item">
						<div className="blog-card__item__date">
							{new Date(posts[25].published_at).toDateString()}
						</div>
						<div className="blog-card__item__title">{posts[25].title}</div>
						<div className="blog-card__item_description">
							{posts[25].description}
						</div>
						<div className="blog-card__item__link">READ MORE</div>
					</div>
				</a>
				<a href={posts[28].url} className="blog-card__single">
					<img src={posts[28].social_image} alt="" />
					<div className="blog-card__item">
						<div className="blog-card__item__date">
							{new Date(posts[28].published_at).toDateString()}
						</div>
						<div className="blog-card__item__title">{posts[28].title}</div>
						<div className="blog-card__item_description">
							{posts[28].description}
						</div>
						<div className="blog-card__item__link">READ MORE</div>
					</div>
				</a>
				<a href={posts[0].url} className="blog-card__single">
					<img src={posts[0].social_image} alt="" />
					<div className="blog-card__item">
						<div className="blog-card__item__date">
							{new Date(posts[0].published_at).toDateString()}
						</div>
						<div className="blog-card__item__title">{posts[0].title}</div>
						<div className="blog-card__item_description">
							{posts[0].description}
						</div>
						<div className="blog-card__item__link">READ MORE</div>
					</div>
				</a>
			</div>
		</div>
	);
}

export default BlogCard;
