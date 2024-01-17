// Redux
import { connect } from "react-redux";
// Components
import Loader from "../../components/Loader";
import SeoHelmet from "../../components/Helmet";
// Styles
import "../../constants/page-styles.scss";

interface SearchPageProps {
	states: {
		allItemsLoading: boolean;
	};
}

const SearchPage = ({ states }: SearchPageProps) => {
	const { allItemsLoading } = states;
	return (
		<div className="page">
			<SeoHelmet description="Listado de articulos" />
			<div className="container">{allItemsLoading && <Loader />}</div>
		</div>
	);
};

const states = ({ itemStore }) => {
	const { loading } = itemStore.all;
	return {
		states: {
			allItemsLoading: loading,
		},
	};
};

export default connect(states)(SearchPage);
