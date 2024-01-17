// Tools
import { useEffect, useState } from "react";
// Redux
import { connect } from "react-redux";
// Types
import { ItemDto } from "../../types/item.dto";
// Components
import SeoHelmet from "../../components/Helmet";
import Loader from "../../components/Loader";
import ErrorMsg from "../../components/ErrorMsg";
import Item from "./components/Item";
// Styles
import "./mixins.scss";

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

	// if (!allItems || allItems?.length < 1) {
	// 	return (
	// 		<div className="page">
	// 			<div className="container">
	// 				<div className="empty-state">EMPTY</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className="page">
			<SeoHelmet description={"No dejes de buscar"} path={"/items"} />
			<div className="container">
				{allItems && allItems?.length > 0 && (
					<ul id="search-list">
						{allItems.map((item, i) => {
							const elKey = i + 1;
							const lastItem = i === allItems.length - 1;
							return (
								<li key={elKey} className="list-item">
									<Item product={item} />
									{!lastItem && <hr className="soft-line" />}
								</li>
							);
						})}
					</ul>
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
