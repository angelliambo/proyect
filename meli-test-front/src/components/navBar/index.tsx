// Tools
import { Controller, useForm } from "react-hook-form";
import { AppDispatch } from "../../store";
// Img
import Search18x18tSrc from "../assets/img/ic_Search_18x18.png";
import NavLogoSrc53x36 from "../assets/img/Logo_ML_53x36.png";
// redux
import { connect, useDispatch } from "react-redux";
import { getAll } from "../../store/slices/items";
// Styles
import "./mixins.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorMsg from "../ErrorMsg";

const NavBar = ({ states }) => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const [showError, setShowError] = useState(false);
	const { allItemsSuccess, allItemsLoading, allItemsError } = states;
	const { control, formState, handleSubmit } = useForm({
		mode: "onChange",
		reValidateMode: "onChange",
	});

	// Handler - Submit
	const submitHandler = ({ searchKeyWord }) => {
		if (searchKeyWord) {
			dispatch(getAll({ query: searchKeyWord ?? "" }));
		}
	};

	useEffect(() => {
		if (allItemsSuccess && pathname !== "/items") {
			navigate("/items");
		}
		if (allItemsError) {
			setShowError(true);
		}
		if (allItemsLoading) {
			setShowError(false);
		}
	}, [states]);

	return (
		<div className="wrapper">
			<div className="navContainer">
				<a href="/" className="home-link">
					<img src={NavLogoSrc53x36} alt="" className="navlogo" />
				</a>
				<nav className="nav">
					<form id="form-search" onSubmit={handleSubmit(submitHandler)}>
						<Controller
							name="searchKeyWord"
							control={control}
							rules={{
								required: true,
								validate: (val) => {
									return !!val.trim();
								},
							}}
							render={({ onChange, value }) => (
								<input
									disabled={allItemsLoading}
									className="searchKeyWord"
									value={value}
									onChange={onChange}
									type="text"
									name="searchKeyWord"
									placeholder="No dejes de buscar"
								/>
							)}
						/>
						<button
							disabled={!formState.isValid}
							type="submit"
							className="submit"
						>
							<img
								src={Search18x18tSrc}
								alt="Search icon"
								className="searchIco"
							/>
						</button>
					</form>
				</nav>

				{showError && (
					<div className="error-container">
						<ErrorMsg toggleVisivility={setShowError} />
					</div>
				)}
			</div>
		</div>
	);
};

const states = ({ itemStore }) => {
	const { loading, success, error } = itemStore.all;
	return {
		states: {
			allItemsSuccess: success,
			allItemsLoading: loading,
			allItemsError: error,
		},
	};
};

export default connect(states)(NavBar);
