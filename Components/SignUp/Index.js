import { SignUpField } from "./SignUpField";

const SignUp = () => (
	<form className="sign-up">
		<h2 className="sign-up__title">Обратная связь</h2>

		<SignUpField label="Ваше имя" name="name" />
		<SignUpField label="Ваша электронная почта" name="email" />
		<SignUpField label="Ваш номер телефона" name="phone" />

		<input
			className="sign-up__submit btn"
			type="submit"
			value="Отправить"
		/>
	</form>
);

export default SignUp;
