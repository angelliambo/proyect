import "./mixins.scss";

const Item = ({ product }) => {
	const {
		id = null,
		title = null,
		thumbnail = null,
		price = null,
		currency_id = "ARS",
	} = product;

	return (
		<div className="list-Element">
			<a href={`/item/${id}`} className="list-itemLink">
				{thumbnail && (
					<img src={thumbnail} alt="product img" className="list-productImg" />
				)}
				<div className="list-generalDescription">
					{price && (
						<h3 className="list-price">
							{currency_id === "ARS" ? "$" : "u$d"} {price}
						</h3>
					)}
					{title && <p className="list-ElementTitle">{title}</p>}
				</div>
			</a>
			<div className="list-locationWrapper">
				<p className="list-location">[location]</p>
			</div>
		</div>
	);
};

export default Item;
