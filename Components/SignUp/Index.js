import { SignUpField } from "./SignUpField";
import { useFormik } from "formik";
import { schema } from "../../validation/sign-up-validation";

const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<form className="sign-up" onSubmit={formik.handleSubmit}>
			<h2 className="sign-up__title">Обратная связь</h2>

			<SignUpField
				label="*Ваше имя"
				name="name"
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				touched={formik.touched}
				errors={formik.errors}
			/>
			<SignUpField
				label="Ваша электронная почта"
				name="email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				touched={formik.touched}
				errors={formik.errors}
			/>
			<SignUpField
				label="*Ваш номер телефона"
				name="phone"
				value={formik.values.phone}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				touched={formik.touched}
				errors={formik.errors}
				phone={true}
			/>

			<input
				className="sign-up__submit btn"
				type="submit"
				value="Отправить"
			/>
		</form>
	);
};

export default SignUp;
