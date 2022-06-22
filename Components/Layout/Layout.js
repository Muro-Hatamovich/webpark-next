import { Fragment } from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => (
	<Fragment>
		<Header />

		<main>{children}</main>

		<footer />
	</Fragment>
);
