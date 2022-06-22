import { Section } from "../Layout/Section";
import { ServicesMain } from "./ServicesMain";
import { ServicesList } from "./ServicesList";

export const Services = () => (
	<Section className="services">
		<div className="services__content shadow-box">
			<ServicesMain />
			<ServicesList />
		</div>
	</Section>
);
