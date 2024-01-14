import { connect } from "react-redux";
import { ItemDto } from "../../types/item.dto";

interface SearchListPageProps {
	allItems?: ItemDto[];
}

const SearchListPage = ({ allItems }: SearchListPageProps) => {
	console.log(":: ~ SearchListPage ~ allItems", allItems);

	return <div className="page">List</div>;
};

const states = ({ itemStore }) => {
	const { data: allItems } = itemStore.all;
	return {
		allItems: allItems?.results,
	};
};

export default connect(states)(SearchListPage);
