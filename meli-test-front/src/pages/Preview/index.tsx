// Tools
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Redux
import { getDescription, getOne } from "../../store/slices/items";
import { AppDispatch } from "../../store";
// Types
import { ItemDescriptionDto, ItemDto } from "../../types/item.dto";
// Components
import Details from "./components/details/details";
import Product from "./components/product/produx";
import Loader from "../../components/Loader";
import ErrorMsg from "../../components/ErrorMsg";
import SeoHelmet from "../../components/Helmet";
// Styles
import "../../constants/page-styles.scss";

interface PreviewProps {
	product: ItemDto;
	productStates: {
		productLoading: boolean;
		productSuccess: boolean;
		productError: any;
	};
	description: ItemDescriptionDto;
	descriptionStates: {
		descriptionLoading: boolean;
		descriptionSuccess: boolean;
		descriptionError: any;
	};
}

const Preview = ({
	product,
	productStates,
	description,
	descriptionStates,
}: PreviewProps) => {
	const { id: productId } = useParams();
	const { productLoading, productSuccess, productError } = productStates;

	const [showError, setShowError] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (productId) {
			dispatch(getOne({ idItem: productId }));
			dispatch(getDescription({ idItem: productId }));
		}
	}, [productId]);

	useEffect(() => {
		if (productError) {
			setShowError(true);
		}
		if (productLoading && showError) {
			setShowError(false);
		}
	}, [productError, productLoading]);

	return (
		<div className="page">
			<SeoHelmet
				description={"No dejes de buscar"}
				path={`/items/${productId}/descripcion`}
			/>
			<div className="container">
				{productLoading && !productSuccess && <Loader />}
				{showError && <ErrorMsg toggleVisivility={() => setShowError(false)} />}
				{product && <Product info={product} />}
				<Details
					description={description}
					descriptionStates={{
						loading: descriptionStates.descriptionLoading,
						success: descriptionStates.descriptionSuccess,
						error: descriptionStates.descriptionError,
					}}
				/>
			</div>
		</div>
	);
};

const states = ({ itemStore }) => {
	const {
		data: product,
		loading: productLoading,
		success: productSuccess,
		error: productError,
	} = itemStore.one;
	const {
		data: description,
		loading: descriptionLoading,
		success: descriptionSuccess,
		error: descriptionError,
	} = itemStore.description;

	return {
		product,
		productStates: {
			productLoading,
			productSuccess,
			productError,
		},
		description,
		descriptionStates: {
			descriptionLoading,
			descriptionSuccess,
			descriptionError,
		},
	};
};

export default connect(states)(Preview);
