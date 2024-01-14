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

const NavBar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { control, formState, handleSubmit } = useForm({
		mode: "onChange",
		reValidateMode: "onChange",
	});

	// Handler - Submit
	const submitHandler = ({ searchKeyWord }) => {
		if (searchKeyWord) {
			dispatch(getAll({ query: searchKeyWord }));
		}
	};

	return (
		<div className="wrapper">
			<div className="navContainer">
				<img src={NavLogoSrc53x36} alt="" className="navlogo" />
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
									className="searchKeyWord"
									value={value}
									onChange={onChange}
									type="text"
									name="searchKeyWord"
									placeholder="Nunca dejes de buscar"
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
			</div>
		</div>
	);
};

// export default NavBar;
const states = ({ itemStore }) => {
	const { data: allItems, states: allItemsStates } = itemStore.all;
	return {
		allItems: allItems?.results,
		allItemsStates,
	};
};

export default connect(states)(NavBar);
