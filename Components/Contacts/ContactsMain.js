import { ContactsInfo } from "./ContactsInfo";
import SocialNetwork from "../SocialNetwork";
import SignUp from "../SignUp";

export const ContactsMain = ({ config }) => (
	<section className="contacts-main">
		<h2 className="contacts-main__title">Наши контакты</h2>

		<ContactsInfo />
		<SocialNetwork />
		<SignUp config={config} />
	</section>
);
