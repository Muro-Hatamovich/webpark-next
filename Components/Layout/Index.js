import { Fragment } from "react";
import { Header } from "./Header";

const Layout = ({ children }) => (
	<Fragment>
		<Header />

		<main>{children}</main>

		<footer />
	</Fragment>
);

export default Layout;
