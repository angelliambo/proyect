import { connect } from "react-redux";
import { ItemDto } from "../../types/item.dto";
import Loader from "../../components/Loader";
import ErrorMsg from "../../components/ErrorMsg";
import { useEffect, useState } from "react";

interface SearchListPageProps {
	allItems?: ItemDto[];
	states: {
		allItemsSuccess: boolean;
		allItemsLoading: boolean;
		allItemsError: any;
	};
}

const SearchListPage = ({ allItems, states }: SearchListPageProps) => {
	console.log(":: ~ SearchListPage ~ allItems", allItems);

	const { allItemsSuccess, allItemsLoading, allItemsError } = states;
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		if (allItemsError) {
			setShowError(true);
		}
		if (allItemsLoading && showError) {
			setShowError(false);
		}
	}, [states]);

	return (
		<div className="page">
			<div className="container">
				{allItems && allItems.length > 0 ? (
					<ul id="search-list">
						{allItems.map((item, i) => {
							const elKey = i + 1;
							return (
								<li className="list-item" key={elKey}>
									ITEM
								</li>
							);
						})}
					</ul>
				) : (
					<div className="empty-state">EMPTY</div>
				)}
				{allItemsLoading && <Loader />}
				{showError && <ErrorMsg toggleVisivility={setShowError} />}
			</div>
		</div>
	);
};

const states = ({ itemStore }) => {
	const { data: allItems, loading, success, error } = itemStore.all;
	return {
		allItems: allItems?.results,
		states: {
			allItemsSuccess: success,
			allItemsLoading: loading,
			allItemsError: error,
		},
	};
};

export default connect(states)(SearchListPage);
