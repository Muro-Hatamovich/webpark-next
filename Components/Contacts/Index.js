import { Section } from "../Layout/Section";
import { ContactsMain } from "./ContactsMain";
import Image from "next/image";

const Contacts = () => (
	<Section className="contacts">
		<div className="contacts__content shadow-box">
			<div className="contacts__image">
				<Image
					src="/images/site/call-center.png"
					alt="Картинка"
					width={500}
					height={500}
					layout="responsive"
				/>
			</div>
			<ContactsMain />
		</div>
	</Section>
);

export default Contacts;
