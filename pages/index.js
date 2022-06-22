import { Fragment } from "react";
import Hero from "../Components/Hero";
import Intro from "../Components/Intro";
import Partners from "../Components/Partners";
import Services from "../Components/Services";

const Home = () => (
	<Fragment>
		<Hero />
		<Intro />
		<Partners />
		<Services />
	</Fragment>
);
export default Home;
