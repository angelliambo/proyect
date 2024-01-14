import { Outlet } from "react-router-dom";
import "./mixins.scss";

const Component = () => {
	return (
		<div className="pageBg">
			<Outlet />
		</div>
	);
};

export default Component;
