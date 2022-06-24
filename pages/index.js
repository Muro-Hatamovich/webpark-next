import { Fragment } from "react";
import Hero from "../Components/Hero";
import Intro from "../Components/Intro";
import Partners from "../Components/Partners";
import Services from "../Components/Services";
import Layout from "../Components/Layout";
import { DataContext } from "../store/DataContext";

const Home = ({ config }) => (
	<DataContext.Provider value={config}>
		<Layout>
			<Hero />
			<Intro />
			<Partners />
			<Services />
		</Layout>
	</DataContext.Provider>
);

export const getStaticProps = async () => {
	return {
		props: {
			config: {
				service_id: process.env.EMAIL_SERVICE_ID,
				access_token: process.env.EMAIL_ACCESS_TOKEN,
			},

			revalidate: 60000,
		},
	};
};

export default Home;
