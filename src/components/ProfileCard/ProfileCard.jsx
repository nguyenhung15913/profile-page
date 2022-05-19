import "./ProfileCard.css";

function ProfileCard() {
	return (
		<div className="profile-card">
			<img className="profile-card__profile-banner" src="/cover.jpg" alt="" />

			<div className="profile-card__profile-avatar"></div>

			<div className="profile-card__user">
				<div className="profile-card__name">Hung Nguyen (Harry)</div>
				<div className="profile-card__title">Full-stack developer</div>
			</div>

			<div className="profile-card__info">
				<table>
					<tr className="profile-card__info__row">
						<td>
							<b>Age</b>
						</td>
						<td>25 Years Old</td>
					</tr>

					<tr className="profile-card__info__row">
						<td>
							<b>Phone</b>
						</td>
						<td>416-821-5021</td>
					</tr>

					<tr className="profile-card__info__row">
						<td>
							<b>Email</b>
						</td>
						<td>nguyenhung15913@gmail.com</td>
					</tr>

					<tr className="profile-card__info__row">
						<td>
							<b>Address</b>
						</td>
						<td>1501 51 st SE, Calgary, Alberta, Canada</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default ProfileCard;
