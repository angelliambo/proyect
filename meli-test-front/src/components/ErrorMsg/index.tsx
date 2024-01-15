import "./mixins.scss";

interface ErrorMsgProps {
	toggleVisivility: (value) => void;
}

const ErrorMsg = ({ toggleVisivility }: ErrorMsgProps) => {
	return (
		<div id="error-wrapper">
			<p className="msg">Ha ocurrido un error</p>
			<button
				className="close-cta"
				type="button"
				onClick={() => toggleVisivility(false)}
			>
				X
			</button>
		</div>
	);
};

export default ErrorMsg;
