import { connect } from "react-redux";
import "./mixins.scss";
import Loader from "../../components/Loader";

interface SearchPageProps {
	states: {
		allItemsLoading: boolean;
	};
}

const SearchPage = ({ states }: SearchPageProps) => {
	const { allItemsLoading } = states;
	return (
		<div className="page">
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
