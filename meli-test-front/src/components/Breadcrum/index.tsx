import "./mixins.scss";

interface BreadcrumProps {
	info?;
}

const Breadcrum = ({ info }: BreadcrumProps) => {
	const filterBreadcrumInfo = info?.find((item) => item.id === "category");

	return (
		<div id="breadcrum-wrapper">
			{filterBreadcrumInfo &&
				filterBreadcrumInfo.values.map((category, i) => {
					const key = i + 1;
					const lastItem = i === filterBreadcrumInfo.values.length - 1;
					const categoryName = category?.name;
					const toLongArray = i <= 3;
					const showSpread = i === 3;

					return (
						categoryName &&
						toLongArray && (
							<span key={key}>
								<span className="bread">
									{categoryName}
									{!lastItem && "  >"}
									{showSpread && "  ..."}
								</span>
							</span>
						)
					);
				})}
		</div>
	);
};

export default Breadcrum;
