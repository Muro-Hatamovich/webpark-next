export const SignUpField = ({ label, props }) => (
	<div className="sign-up-field">
		<label className="sign-up-field__label">{label}</label>
		<input className="sign-up-field__input" {...props} />
	</div>
);
