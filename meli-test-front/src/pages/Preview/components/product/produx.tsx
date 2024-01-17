import "../../../../constants/page-styles.scss";
import "./mixins.scss";

const Product = ({ info }) => {
	const { thumbnail, condition, title, currency_id, price } = info;
	return (
		<div className="productDetailWrapper">
			<div className="imgWrapper">
				<img src={thumbnail} alt="product img" className="productImg" />
			</div>
			<div className="summaryInfo">
				<p className="condition">{condition === "new" ? "Nuevo" : "Usado"}</p>
				<h3 className="productTitle">{title}</h3>
				<h2 className="price">
					{currency_id === "ARS" ? "$" : "u$d"} {price}
				</h2>
				<button className="primaryButton" type="button">
					Comprar
				</button>
			</div>
		</div>
	);
};

export default Product;
