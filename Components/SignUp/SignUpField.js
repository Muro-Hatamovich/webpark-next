import NumberFormat from "react-number-format";

export const SignUpField = ({ label, ...props }) => {
	const { touched, errors, name, phone } = props;

	return (
		<div className="sign-up-field">
			<label className="sign-up-field__label">{label}</label>

			{phone === true ? (
				<NumberFormat
					className="sign-up-field__input"
					type="text"
					format="+(998)## ###-##-##"
					mask="-"
					allowEmptyFormatting
					{...props}
				/>
			) : (
				<input className="sign-up-field__input" {...props} />
			)}

			{touched[name] && errors[name] ? (
				<p className="sign-up-field__error">{errors[name]}</p>
			) : null}
		</div>
	);
};
