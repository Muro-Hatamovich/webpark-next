import { Fragment } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Layout from "../components/Layout";
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

export const getStaticProps = async (props) => {
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
