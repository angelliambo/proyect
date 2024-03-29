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
import Breadcrum from "../../components/Breadcrum";

interface SearchListPageProps {
	allItems?: ItemDto[];
	breadcrumInfo;
	states: {
		allItemsSuccess: boolean;
		allItemsLoading: boolean;
		allItemsError: any;
	};
}

const SearchListPage = ({
	allItems,
	states,
	breadcrumInfo,
}: SearchListPageProps) => {
	const { allItemsLoading, allItemsError } = states;
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
			<SeoHelmet description={"No dejes de buscar"} path={"/items"} />

			<Breadcrum info={breadcrumInfo} />
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
				{allItemsLoading && (
					<div className="loaderWrapper">
						<Loader />
					</div>
				)}

				{showError && <ErrorMsg toggleVisivility={setShowError} />}
			</div>
		</div>
	);
};

const states = ({ itemStore }) => {
	const { data: allItems, loading, success, error } = itemStore.all;
	return {
		allItems: allItems?.results,
		breadcrumInfo: allItems?.available_filters,
		states: {
			allItemsSuccess: success,
			allItemsLoading: loading,
			allItemsError: error,
		},
	};
};

export default connect(states)(SearchListPage);
