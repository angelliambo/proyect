import { Outlet } from "react-router-dom";
import "./mixins.scss";

const AppLayout = () => {
	return (
		<div className="pageBg">
			<Outlet />
		</div>
	);
};

export default AppLayout;
