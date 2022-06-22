import { SignUpField } from "./SignUpField";

const SignUp = () => (
	<form className="sign-up">
		<h2 className="sign-up__title">Обратная связь</h2>

		<SignUpField label="Ваше имя" />
		<SignUpField label="Ваша электронная почта" />
		<SignUpField label="Ваш номер телефона" />

		<input
			className="sign-up__submit btn"
			type="submit"
			value="Отправить"
		/>
	</form>
);

export default SignUp;
