import { connect } from "react-redux";
import "./mixins.scss";

const SearchPage = ({ allItemsStates }) => {
	return (
		<div className="page">
			<div className="container">
				{allItemsStates?.loading && <p>..loading</p>}
			</div>
		</div>
	);
};

const states = ({ itemStore }) => {
	const { data: allItems, states: allItemsStates } = itemStore.all;
	return {
		allItems: allItems?.results,
		allItemsStates,
	};
};

export default connect(states)(SearchPage);
