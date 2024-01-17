// Tools
import { useEffect, useState } from "react";
// Components
import Loader from "../../../../components/Loader";
import ErrorMsg from "../../../../components/ErrorMsg";
// Types
import { ItemDescriptionDto } from "../../../../types/item.dto";
// Styles
import "./mixins.scss";

interface DetailsProps {
	description: ItemDescriptionDto;
	descriptionStates: {
		loading: boolean;
		success: boolean;
		error: any;
	};
}

const Details = ({ description, descriptionStates }: DetailsProps) => {
	console.log(":: ~ Details ~ description", description);

	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (descriptionStates.error) {
			setShowError(true);
		}
		if (descriptionStates.loading && showError) {
			setShowError(false);
		}
	}, [descriptionStates]);

	return (
		<>
			{descriptionStates.loading && <Loader />}
			{showError && <ErrorMsg toggleVisivility={setShowError} />}
			{description?.plain_text && (
				<div className="detailWrapper">
					<h3 className="sectionTitle">Descripcion del producto</h3>
					<p className="productDetail">{description.plain_text}</p>
				</div>
			)}
		</>
	);
};

export default Details;
