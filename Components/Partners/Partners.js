import { Section } from "../Layout/Section";
import { PartnersList } from "./PartnersList";

export const Partners = () => (
	<Section className="partners">
		<div className="partners__content shadow-box">
			<h2 className="partners__title">Наши клиенты</h2>

			<PartnersList />
		</div>
	</Section>
);
