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
		<div className="listElement">
			<a href={`/item/${id}`} className="itemLink">
				{thumbnail && (
					<img src={thumbnail} alt="product img" className="productImg" />
				)}
				<div className="generalDescription">
					{price && (
						<h3 className="price">
							{currency_id === "ARS" ? "$" : "u$d"} {price}
						</h3>
					)}
					{title && <p className="listElementTitle">{title}</p>}
				</div>
			</a>
			<div className="locationWrapper">
				<p className="location">[location]</p>
			</div>
		</div>
	);
};

export default Item;
